

namespace Site.Data.DBModel
{
    public class FAQ : BaseData
    {
        public MLString Question { get; set; } = new MLString();
        public MLString Answer { get; set; } = new MLString();
    }
}
