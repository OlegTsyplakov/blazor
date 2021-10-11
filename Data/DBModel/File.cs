

using System;
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class File : BaseData
    {
        public LookupRef<FileGroup> Group { get; set; } = new LookupRef<FileGroup>();
        public LookupRef<AdMaterialCategory> AdmaterialGroup { get; set; } = new LookupRef<AdMaterialCategory>();
        public MLString NameInGroup { get; set; } = new MLString();
        public MLString FileName { get; set; } = new MLString();
        public FileKind Kind { get; set; }
        public MLString Thumbnail { get; set; } = new MLString();
        public MLString IssuedBy { get; set; } = new MLString();

        public DateTime Date0 { get; set; }
        public DateTime Date1 { get; set; }
        public DocDateMode DateMode { get; set; }
        public LookupRef<Country> Country { get; set; } = new LookupRef<Country>();
        public bool Published { get; set; } = true;
        public bool PreferIcon { get; set; } = true;

        public CorpSiteFileCategory CorpSiteCategory { get; set; } = CorpSiteFileCategory.None;
    }
}
