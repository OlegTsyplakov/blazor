

using MongoDB.Bson.Serialization.Attributes;
using Site.Data.Services;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class PropertyType : BaseData
    {
        public MLString Html { get; set; } = new MLString();
        public List<string> Indications { get; set; } = new List<string>();
        public string Code { get; set; }
        public int Align { get; set; }
        public int NoMerge { get; set; }
        public LookupRef<Unit> Unit { get; set; } = new LookupRef<Unit>();
        [BsonIgnore]
        public MLString UnitHtml
        {
            get
            {
                if (Unit.Value == null) return null;
                return Unit.Value.Html;
            }
        }
        public MLString HtmlOrName()
        {
            if (!MLString.IsNullOrEmpty(Html))
                return Html;

            return Name;
        }
        public  string HtmlNameAndUnit(string lang)
        {
            string title = Utils.LC(HtmlOrName(), lang);
            string unithtml = Utils.LC(UnitHtml, lang);
            if (!string.IsNullOrEmpty(unithtml)) title += ", " + unithtml;
            return title;
        }
    }
}
