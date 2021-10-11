
using System.Linq;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class WareFilterGroup
    {
        public PropertyType PropType;

        public List<WareFilterValue> PropValues = new List<WareFilterValue>();
        public bool Match(WareItem M, MLStringUse LC)
        {
            
            var L = M.CollectProperties().Where(x => x.PropType.KeyAsString == PropType.IdAsString).ToList();
            if (L.Count == 0) return false;

            return L.Exists(x => { var z = LC(x.Value); return PropValues.Exists(v => LC(v.FV.Value) == z); });
        }
    }
}
