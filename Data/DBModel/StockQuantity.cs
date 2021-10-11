

namespace Site.Data.DBModel
{
    public class StockQuantity
    {
        public LookupRef<Stock> Stock { get; set; } = new LookupRef<Stock>();
        public double Quantity { get; set; }
    }
}
