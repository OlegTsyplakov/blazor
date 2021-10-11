

namespace Site.Data.DBModel
{
    public class WareItemQuantity
    {
        public LookupRef<WareItem> Item { get; set; } = new LookupRef<WareItem>();
        public double Quantity { get; set; } = 1.0;
    }
}
