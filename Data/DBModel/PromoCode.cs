

using System;

namespace Site.Data.DBModel
{
    public class PromoCode : BaseData
    {
        public string Code { get; set; }
        public double Discount { get; set; }
        public string Emitent { get; set; }
        public LookupRef<BranchAddress> Curator { get; set; }
        public string Partner { get; set; }
        public DateTime CreationDate { get; set; }
        public string ApplicationTerms { get; set; }
        public int UsageLimit { get; set; }
        public DateTime ValidUntil { get; set; }
    }
}
