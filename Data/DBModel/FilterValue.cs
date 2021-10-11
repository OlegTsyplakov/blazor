
namespace Site.Data.DBModel
{
    public class FilterValue : BaseData
    {
        public MLString Value { get; set; } = new MLString();
        public LookupRef<PropertyType> PropType { get; set; } = new LookupRef<PropertyType>();
    }
}
