

using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class DeliveryInfo
    {
        public DeliveryState State { get; set; }
        public string Comment { get; set; }
    }
}
