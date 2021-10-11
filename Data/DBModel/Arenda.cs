

namespace Site.Data.DBModel
{
    public class Arenda : BaseData
    {
        public LookupRef<WareItem> Item { get; set; } = new LookupRef<WareItem>();
        public int Price { get; set; }
        public int Deposit { get; set; }
  
    }
}

    
