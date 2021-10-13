
using System.Collections.Generic;


namespace Site.Data.DBModel
{
    public class WareCommon : ObjectCommon
    {
        public LookupRef<Vendor> Vendor { get; set; } = new LookupRef<Vendor>();

        public List<RecommendedItem> AlsoRecommendedItems2 { get; set; } = new List<RecommendedItem>();
        public List<RecommendedGroup> AlsoRecommendedGroups2 { get; set; } = new List<RecommendedGroup>();
    }
}
