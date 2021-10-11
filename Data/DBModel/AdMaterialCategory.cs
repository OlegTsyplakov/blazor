using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class AdMaterialCategory : BaseData
    {
        public bool IsShow { get; set; }
        public List<AdMaterialSubCategory> SubCategories { get; set; } = new List<AdMaterialSubCategory>();
        public MLString Thumbnail { get; set; } = new MLString();
    }
    public class AdMaterialSubCategory
    {
        public LookupRef<FileGroup> Group { get; set; } = new LookupRef<FileGroup>();
        public string Url { get; set; }
        public MLString Name { get; set; } = new MLString();
        public MLString Thumbnail { get; set; } = new MLString();
        public int Position { get; set; }

    }
}
