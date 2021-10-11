

using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class PropertyValues : BaseData
    {
        public string Code { get; set; }
        public string PT_id { get; set; }
        public List<PropertyValue> PVList { get; set; } = new List<PropertyValue>();
    }
    public class PropertyValue
    {
        public MLString ValueDescription { get; set; } = new MLString();
    }
}
