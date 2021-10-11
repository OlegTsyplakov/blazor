

using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class RecommendedGroup
    {
        public LookupRef<WareGroup> Group { get; set; } = new LookupRef<WareGroup>();

        public List<string> ExludeFromGroup { get; set; } = new List<string>();

        public bool Propagate { get; set; } = true;
        public bool PropagateToGroupsOnly { get; set; }
        public LookupRef<FilterValue> Filter { get; set; } = new LookupRef<FilterValue>();
    }
}
