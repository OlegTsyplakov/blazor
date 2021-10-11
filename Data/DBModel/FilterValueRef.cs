

namespace Site.Data.DBModel
{
    public class FilterValueRef
    {
        public LookupRef<FilterValue> Ref { get; set; } = new LookupRef<FilterValue>();
        public bool Propagate { get; set; } = true;
    }
}
