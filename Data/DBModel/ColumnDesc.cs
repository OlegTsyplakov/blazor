

namespace Site.Data.DBModel
{
    public class ColumnDesc
    {
        public LookupRef<PropertyType> PropType { get; set; } = new LookupRef<PropertyType>();
        public double Width { get; set; } = 16.0;
    }
}
