using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class OrderStateInfo
    {
        public OrderState State { get; set; }
        public string Comment { get; set; }
    }
}
