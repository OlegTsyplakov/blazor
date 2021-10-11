

namespace Site.Data.DBModel
{
    public class Redirection : BaseData
    {
        public bool Automatic;
        public string FormerUrl { get; set; } 
        public string NewUrl { get; set; }
    }
}
