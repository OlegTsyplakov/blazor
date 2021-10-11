
using MongoDB.Bson;
using MongoDB.Driver;
using Site.Data.DBModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site.Data
{
    public static class DbContext
    {
        
        
        private static readonly string Connection_string = "mongodb://localhost:27017";
        private static readonly string Database_name = "blazor";
        private static readonly MongoClient _Client = new MongoClient(Connection_string);
        private static readonly IMongoDatabase _Database = _Client.GetDatabase(Database_name);
   

        public static IMongoCollection<T> GetCollection<T>()
        {
            return _Database.GetCollection<T>(typeof(T).Name);
        }
        public static List<T> GetAllItemsFromCollection<T>(Func<T, bool> filter) where T : BaseData
        {
            if (filter == null)
                filter = x => true;
            return _Database.GetCollection<T>(typeof(T).Name).AsQueryable().Where(filter).ToList();
        }
        public static List<T> GetAllItemsFromCollection<T>(Func<T, bool> filter = null, Func<T, int> orderby = null) where T : BaseData
        {
            if (filter == null)
                filter = x => true;
            if (orderby != null)
                return _Database.GetCollection<T>(typeof(T).Name).AsQueryable().Where(filter).OrderBy(orderby).ToList();
            return _Database.GetCollection<T>(typeof(T).Name).AsQueryable().Where(filter).ToList();
        }
        public static T GetItemFromCollectionByID<T>(string id) where T : BaseData
        {
            return _Database.GetCollection<T>(typeof(T).Name).Find(Builders<T>.Filter.Eq("_id", ObjectId.Parse(id))).FirstOrDefault();
        }
        public static T GetItemFromCollection<T>(Func<T, bool> filter = null) where T : BaseData
        {
            return _Database.GetCollection<T>(typeof(T).Name).AsQueryable().Where(filter).FirstOrDefault();
        }
        public static async void AddItemToCollection<T>(T item) where T : BaseData
        {
            await _Database.GetCollection<T>(typeof(T).Name).InsertOneAsync(item);
        }
        public static async void DeleteItemFromCollection<T>(string id) where T : BaseData
        {
            var filter = Builders<T>.Filter.Eq("_id", ObjectId.Parse(id));
            await _Database.GetCollection<T>(typeof(T).Name).DeleteOneAsync(filter);
        }
        public static async void UpdateItemFromCollection<T>(T item) where T : BaseData
        {
            var filter = Builders<T>.Filter.Eq("_id", ObjectId.Parse(item.IdAsString));
            item.LastModified = DateTime.Now;
            await _Database.GetCollection<T>(typeof(T).Name).ReplaceOneAsync(filter, item);
        }
        public static T ItemById<T>(BsonObjectId id) where T : BaseData
        {
            return _Database.GetCollection<T>(typeof(T).Name).Find(Builders<T>.Filter.Eq("_id", id)).FirstOrDefault();
        }
 
        public static List<T> LoadFirstChildren<T>(string id) where T : WareGroup
        {
            var filter = Builders<T>.Filter.Eq("ShowInCatalog", true) & Builders<T>.Filter.Eq("Parent.Key", ObjectId.Parse(id));
            return _Database.GetCollection<T>(typeof(T).Name).Find(filter).SortBy(x => x.Position).ToList();
        }
        public static List<T> LoadAllChildren<T>(string id) where T : WareGroup
        {
            var filter = Builders<T>.Filter.Eq("ShowInCatalog", true) & Builders<T>.Filter.Eq("Parent.Key", ObjectId.Parse(id));
            List<T>Children =  _Database.GetCollection<T>(typeof(T).Name).Find(filter).SortBy(x => x.Position).ToList();
            List<T> Result = new List<T>();
            Result.AddRange(ChildrenRecursion(Children));
            return Result;
        }
        public static List<T> LoadWareItems<T>(string id) where T : WareItem
        {
            var filter = Builders<T>.Filter.Eq("ShowInCatalog", true) & Builders<T>.Filter.Eq("Group.Key", ObjectId.Parse(id));         
            return _Database.GetCollection<T>(typeof(T).Name).Find(filter).SortBy(x => x.Position).ToList();
        }
        public static List<T> LoadWareItems<T>(string id, Func<T, bool> lambda = null) where T : WareItem
        {
            return _Database.GetCollection<T>(typeof(T).Name).AsQueryable().Where(x => x.Group.Key == ObjectId.Parse(id) && x.ShowInCatalog == true).Where(lambda).OrderBy(x => x.Position).ToList();
        }
        public static List<T> ChildrenRecursion<T>(List<T> Children) where T : WareGroup 
        {
            List<T> Result = new List<T>();
            if (Children.Count > 0)
            {
                Result.AddRange(Children);
                foreach (var child in Children)
                {
                    List<T> Temp = LoadFirstChildren<T>(child.IdAsString);
                    if (Temp.Count > 0) 
                    {
                        Result.AddRange(ChildrenRecursion(Temp));
                    }
                }

            }
            return Result;
        }
       
    }

}
