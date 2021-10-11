using MongoDB.Driver;
namespace Site.Data.DBModel
{
    public class Currency : BaseData
    {
        public string Code { get; set; }
        public string Sign { get; set; }
        public MLString SignHtml { get; set; } // Html
        public MLString SignText { get; set; } // Text
        public double Rate { get; set; }

        private static Currency _base;
        private static bool baseIsLoaded;
        public static Currency Base
        {
            get
            {
                if (!baseIsLoaded)
                {
                    _base = DbContext.GetCollection<Currency>().Find(x => x.Rate == 1.0).FirstOrDefault();
                    baseIsLoaded = true;
                }
                return _base;
            }
        }
    }
}
