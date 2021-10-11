

using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
    public class Region : BaseData
    {
        public LookupRef<Country> Country = new LookupRef<Country>();
        public string InternalCode { get; set; }
        public string TransportCode { get; set; }
        public string GeoIPCode { get; set; }
        public List<string> Indications { get; set; } = new List<string>();
        [BsonIgnore]
        public List<string> IndicationsUpper = new List<string>();
    }
}
