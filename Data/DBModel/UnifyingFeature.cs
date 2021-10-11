

using MongoDB.Bson.Serialization.Attributes;

namespace Site.Data.DBModel
{
    public class UnifyingFeature : BaseData
    {
        [BsonIgnoreIfNull]
        public Image Image { get; set; }
        public MLString Description { get; set; }
    }
}
