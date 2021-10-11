

using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class PaymentInfo
    {
        public PaymentProviderCode ProviderCode { get; set; }
        public PaymentState State { get; set; }
        public string ForwardUrl { get; set; }
        public string ReturnUrl { get; set; }
        public string Message { get; set; }
        public object Stage0 { get; set; }
        public object Stage1 { get; set; }
    }
}
