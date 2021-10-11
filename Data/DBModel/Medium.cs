

namespace Site.Data.DBModel
{
    public class Medium
    {
        public MLString FileName { get; set; } = new MLString();
        public MLString Title { get; set; } = new MLString();
        public bool Propagate { get; set; } = true;
    }
}
