


using MongoDB.Bson.Serialization.Attributes;


namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
    public class Image
    {
        public MLString FileName { get; set; } = new MLString();

        public MLString Alt { get; set; } = new MLString();
        public MLString Title { get; set; } = new MLString();
        public bool IsShowInArticle { get; set; }
        public bool IsDrawing { get; set; }
        public bool Propagate { get; set; } = true;
     

    }
}
