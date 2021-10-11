
namespace Site.Data.DBModel
{
    public class WareGroupDiscount
    {
        public LookupRef<WareGroup> Group { get; set; } = new LookupRef<WareGroup>();
        public double Discount { get; set; }
    }
}
