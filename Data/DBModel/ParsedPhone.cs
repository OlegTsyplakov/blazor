using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site.Data.DBModel
{
    public class ParsedPhone
    {
        public readonly string Diallable;
        public readonly string Prefix;
        public readonly string Body;
        public readonly string Ext;
        public static MLString ExtText = MLString.MLS("доб.", "ext.");

    }
}
