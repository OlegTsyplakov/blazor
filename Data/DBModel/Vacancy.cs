

using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class Vacancy : Page
    {
        public List<string> Responsibilities { get; set; } = new List<string>();
        public List<string> Requirements { get; set; } = new List<string>();
        public List<string> Conditions { get; set; } = new List<string>();
        public string TypeOfEmployment { get; set; }
    }
}
