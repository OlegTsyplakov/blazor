using MongoDB.Bson.Serialization.Attributes;

namespace Site.Data.DBModel
{
    public class OrderLine
    {
        public LookupRef<WareItem> Item { get; set; } = new LookupRef<WareItem>();

        public double BasePrice { get; set; }    
        public double UnitsPerPack { get; set; }  
        public double PackQuantity { get; set; }  

        public double Discount { get; set; } 
        [BsonIgnore]
        public double Required; 
        [BsonIgnore]
        public double Sum;
        [BsonIgnore]
        public double SumDisc;
    }
}
