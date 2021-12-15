

using Site.Data.Services;

namespace Site.Data
{
    public static class Lang
    {
        public static string lang;
    
        public static string GetOtherLang(string lang)
        {
            if (lang == Settings.LanguageRU)
                   return Settings.LanguageEN;
                return Settings.LanguageRU;
        }
        public static string GetDifferentLangUrl(string url) 
        {
            if (url == Settings.HomePage)
            {
                return url + Settings.LanguageEN;
            }
            if (url== Settings.HomePage + Settings.LanguageEN) 
            {
                return url.Replace("/en", "");
            }
            if (url.Contains("/en/"))
            {
                return url.Replace("/en/", "/ru/");
            }
            if (url.Contains("/ru/"))
            {
                return url.Replace("/ru/", "/en/");
            }
            return url;
        }

    }
}
