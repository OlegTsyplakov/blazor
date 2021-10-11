

using MongoDB.Bson.Serialization.Attributes;

namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
    public class Country : BaseData
    {
        public string Code { get; set; }
        public MLString ShortName { get; set; } = new MLString();
        public string Code2 { get; set; }
        public string Code3 { get; set; }
    }
}
