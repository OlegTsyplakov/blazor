

namespace Site.Data.DBModel
{
    public class ContentPage : Page
    {
        public MLString Content { get; set; } = new MLString();
        public bool IncludeInSitemap { get; set; }
        public bool Published { get; set; } = true;
    }
}
