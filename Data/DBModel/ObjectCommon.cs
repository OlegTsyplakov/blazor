

using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class ObjectCommon : Page
    {
        public MLString Description { get; set; } = new MLString();
        public MLString DescriptionMore { get; set; } = new MLString();

        public MLString LongDesc { get; set; } = new MLString();
        public MLString Comment { get; set; } = new MLString();
        public List<NewLongDesc> ListNewLongDesc { get; set; } = new List<NewLongDesc>();
        public List<FileRef> Files { get; set; } = new List<FileRef>();
        public List<Image> Images { get; set; } = new List<Image>();
        public List<Medium> Media { get; set; } = new List<Medium>();
        public LookupRef<Youtube> YoutubeVideo { get; set; } = new LookupRef<Youtube>();
        public List<Property> Properties { get; set; } = new List<Property>();
        public bool ShowInCatalog { get; set; }
        public bool ShowInLandingOptima { get; set; }
        public LookupRef<RenderTemplate> Template { get; set; } = new LookupRef<RenderTemplate>();
        [BsonIgnore]
        public Image DefaultImage
        {
            get
            {
                if (Images.Count > 0)
                    return Images[0];

                return null;
            }
        }
        public MLString GetPropValue(string index)
        {
            foreach (var p in Properties)
            {
                if (p.PropType.Value.Code == index)
                {
                    return p.Value;
                }
            }

            return null;
        }
    }
}
