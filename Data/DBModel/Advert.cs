

using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class Advert : BaseData
    {
        public string BlockIdPC { get; set; }
        public string BlockIdMob { get; set; }
        public Image ImagePC { get; set; } = new Image();
        public Image ImageMob { get; set; } = new Image();
        public MLString Link { get; set; } = new MLString();
        public List<Caption> Captions { get; set; } = new List<Caption>();
        public string BackgroundColor { get; set; }
        public bool Published { get; set; } = true;
    }
}
