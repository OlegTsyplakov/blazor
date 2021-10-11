

namespace Site.Data.DBModel
{
    public class PresetFilter2
    {
        public MLString HtmlName { get; set; } = new MLString();
        public LookupRef<FilterValue> Filter { get; set; } = new LookupRef<FilterValue>();
    }
}
