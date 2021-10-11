
namespace Site.Data.DBModel
{
    public class Page : BaseData
    {
        public string Slug { get; set; }
        public MLString MetaTitle { get; set; } = new MLString();
        public MLString MetaKeywords { get; set; } = new MLString();
        public MLString MetaDescription { get; set; } = new MLString();
        public bool ReadyEn { get; set; }

        public string GetSlugOrID() {

            return Slug ?? IdAsString;
        }

    }
}
