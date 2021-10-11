

using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class User : BaseData
    {
        public List<string> Phones { get; set; } = new List<string>();
        public string EMail { get; set; }
    }
}
