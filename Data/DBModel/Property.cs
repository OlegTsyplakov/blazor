

namespace Site.Data.DBModel
{
    public class Property
    {
        public MLString Value { get; set; } = new MLString();
        public LookupRef<PropertyType> PropType { get; set; } = new LookupRef<PropertyType>();
        public bool Propagate { get; set; }
        public bool Hidden { get; set; }
        public bool IsShowInMainContainer { get; set; }
        public bool IsShowInGroupContainer { get; set; }
        public Property()
        {
        }

        public Property(PropertyType PT)
        {
            PropType.Value = PT;
        }
    }
}
