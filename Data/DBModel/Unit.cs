

namespace Site.Data.DBModel
{
    public class Unit : BaseData
    {
        public string Code { get; set; }
        public bool IsBasic { get; set; }
        public double Scale { get; set; }
        public MLString Html { get; set; } = new MLString();
    }
}
