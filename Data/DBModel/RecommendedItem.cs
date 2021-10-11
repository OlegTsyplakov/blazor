

namespace Site.Data.DBModel
{
    public class RecommendedItem
    {
        public LookupRef<WareItem> Item { get; set; } = new LookupRef<WareItem>();
        public bool Propagate { get; set; } = true;
        public bool PropagateToGroupsOnly { get; set; }
        public LookupRef<FilterValue> Filter { get; set; } = new LookupRef<FilterValue>();
    }
}
