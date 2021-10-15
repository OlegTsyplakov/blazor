
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class SearchResultModel
    {
        public string URL;
        public string Text;
    }

    public class SearchResultsModel
    {
        public string OriginalRequest;
        public List<string> RequestParts;
        public List<SearchResultModel> Links = new List<SearchResultModel>();
    }

    public class SearchResultModelEqualityComparer : IEqualityComparer<SearchResultModel>
    {
        public bool Equals(SearchResultModel b1, SearchResultModel b2)
        {
            if (b2 == null && b1 == null)
                return true;
            else if (b1 == null | b2 == null)
                return false;
            else if (b1.URL == b2.URL)
                return true;
            else
                return false;
        }

        public int GetHashCode(SearchResultModel b)
        {
            int h = 0;
            string u = b?.URL;
            if (u != null)
            {
                int l = u.Length;
                for (int i = 0; i < l; i++) h += u[i];
            }
            return h;
        }
    }
}