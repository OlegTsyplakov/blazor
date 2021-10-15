

using Microsoft.AspNetCore.Components;
using Site.Data.DBModel;
using System.Collections.Generic;

namespace Site.Data.Services
{
    public static class ExtensionMethod
    {
        public static string ToStringWithDot(this double value)
        {
            return value.ToString(Settings.MoneyFormat).Replace(',', '.'); 
        }
        public static MarkupString ToMarkupString(this string value)
        {
            return (MarkupString)value;
        }
        public static string AbsoluteID<T>(this LookupRef<T> x) where T : BaseData
        {
            if (x == null) return BaseData.ZeroId.ToString();
            return x.KeyAsString;
        }
       
    }
}
