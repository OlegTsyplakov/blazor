using MongoDB.Bson;
using System;

namespace Site.Data.DBModel
{
    public class BaseData
    {
        public static readonly ObjectId ZeroId = new ObjectId(new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 });
        public static readonly string ZeroIdStr = "000000000000000000000000";
        public static readonly BsonObjectId BsonZeroId = new BsonObjectId(ObjectId.Parse(ZeroIdStr));
        public MLString Name { get; set; } = new MLString();
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();
        public string _guid { get; set; } = Guid.NewGuid().ToString();
        public DateTime LastModified { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public int Position { get; set; }
        public string IdAsString
        {
            get
            {
                return Id.ToString();
            }
        }
       
    }
}
