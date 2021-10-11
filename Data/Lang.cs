

using Site.Data.Services;

namespace Site.Data
{
    public static class Lang
    {
        public static string lang;
    
        public static string GetOtherLang(string lang)
        {
            if (lang == "ru")
                   return "en";
                return "ru";
        }
        public static string GetDifferentLangUrl(string url) 
        {
            if (url == Settings.HomePage)
            {
                url+="en";
                return url;
            }
            if (url== "https://localhost:44364/en") 
            {
                url.Replace("/en", "");
                return url;
            }
            if ( url.Contains("/en/"))
            {
                url.Replace("/en/", "/ru/");
                return url;
            }
           if (url.Contains("/ru/"))
            {
                url.Replace("/ru/", "/en/");
                return url;
            }
            return url;
        }
        public static string GetCurrentUrl(string url)
        {

            return url;
        }
    }
}
