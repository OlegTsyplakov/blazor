using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;


namespace Site.Data.DBModel
{
    public class Advantage : BaseData
    {
        [BsonIgnoreIfNull]
        public Image Image { get; set; }
        public MLString Description { get; set; }
        public MLString DescriptionMore { get; set; }
    }
}
