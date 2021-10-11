

using MongoDB.Bson.Serialization.Attributes;

namespace Site.Data.DBModel
{
    public class Youtube : BaseData
    {
        [BsonIgnoreIfNull]
        public string Code { get; set; }
        public string PSO { get; set; }
    }
}
