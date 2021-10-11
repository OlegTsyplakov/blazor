

namespace Site.Data.DBModel
{
    public class DiscountGroup : BaseData
    {
        public double DefaultDiscount { get; set; }
        public double MaxDiscount { get; set; }
        public bool ShowMaxDiscount { get; set; }
        public double MaxAutoDiscount { get; set; } = 100.0;
        public MLString CampaignInfo { get; set; } = new MLString();
        public MLString MessageToBuyer { get; set; } = new MLString();
    }
}
