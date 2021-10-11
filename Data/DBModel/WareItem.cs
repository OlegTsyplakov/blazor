using System.Linq;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using Site.Data.Services;

namespace Site.Data.DBModel
{
    public class WareItem : WareCommon
    {
        public double AutoConfirm { get; set; }
        public string BaseUnit { get; set; }
        public List<Units> Units { get; set; }
        public string Article { get; set; }
        public double Price { get; set; }
        public double SalePrice { get; set; }
        public double PackAmount { get; set; } = 1.0;
        public double Rest { get; set; }
        public List<string> ExludeFromProperties { get; set; } = new List<string>();
        public List<StockQuantity> StockRests { get; set; } = new List<StockQuantity>();
        public LookupRef<Currency> Currency { get; set; } = new LookupRef<Currency>();
        public LookupRef<Unit> Unit { get; set; } = new LookupRef<Unit>();
        public LookupRef<Unit> PackUnit { get; set; } = new LookupRef<Unit>();
        public List<LookupRef<WareGroup>> BelongsTo { get; set; } = new List<LookupRef<WareGroup>>();
        public LookupRef<WareGroup> Group { get; set; } = new LookupRef<WareGroup>();
        [BsonIgnoreIfNull]
        public string VendorArticle { get; set; }
        public List<WareItemQuantity> AlsoRequired { get; set; } = new List<WareItemQuantity>();
        public bool FlagNew { get; set; }
        public bool FlagSale { get; set; }
        public bool FlagSoldOut { get; set; }
        public bool FlagRecommended { get; set; }

        public string OKSM { get; set; }
        public MLString DescriptionForYandex { get; set; }
        public long NumberForYandex { get; set; }

       

        [BsonIgnore]
        public string FinalArticle { get { return string.IsNullOrEmpty(VendorArticle) ? Article : VendorArticle; } }

        public List<Property> CollectProperties()
        {
            List<Property> AllProps = new List<Property>();
            AllProps.AddRange(Properties);
            AllProps.AddRange(Group?.Value?.CollectPropertiesInner(false));
            RemoveDuplicateProperties(AllProps);
            return AllProps;
        }
        protected static void RemoveDuplicateProperties(List<Property> AllProps)
        {
            for (int i = 0; i < AllProps.Count - 1; i++)
            {
                var K = AllProps[i].PropType.Key;
                var V = AllProps[i].Value;
                for (int j = i + 1; j < AllProps.Count;)
                {
                    if (AllProps[j].PropType.Key == K)
                    {
                        AllProps.RemoveAt(j);
                    }
                    else
                    {
                        j++;
                    }
                }
            }
        }
        public string GetSDR()
        {
            string sdr = string.Empty;
            var group_pointer = this.Group.Value;
            while (group_pointer.SDR == null)
            {
                if (group_pointer.Parent.Value != null)
                {
                    group_pointer = group_pointer.Parent.Value;
                }
                else
                {
                    break;
                }

            }
            if (group_pointer.SDR == "SDR 11")
            {
                sdr = "SDR 11";
            }
            if (group_pointer.SDR == "SDR 7.4")
            {
                sdr = "SDR 7.4";
            }

            return sdr;
        }
        public string GetPSO()
        {
            string system = string.Empty;
            var group_pointer = this.Group.Value;
            while (group_pointer.PSO == null)
            {
                if (group_pointer.Parent.Value != null)
                {
                    group_pointer = group_pointer.Parent.Value;
                }
                else
                {
                    break;
                }
            }
            if (group_pointer.PSO == "Optima")
            {
                system = "Optima";
            }
            if (group_pointer.PSO == "Standart")
            {
                system = "Standart";
            }
            if (group_pointer.PSO == "Premium")
            {
                system = "Premium";
            }
            if (group_pointer.PSO == "Premium/Standart")
            {
                system = "Premium/Standart";
            }
            return system;
        }
        public List<Image> CollectImages(bool IgnoreDrawings)
        {
            List<Image> Result = new List<Image>();
            Result.AddRange(Images);
            var WG = this.Group.Value;
            while (WG != null)
            {
                Result.AddRange(WG.Images.Where(x => x.Propagate && (!IgnoreDrawings || !x.IsShowInArticle)));
                WG = WG.Parent.Value;
            }
            return Result;
        }
        public Image GetMainImage() 
        {
            if (Images.Count > 0)
                return Images[0];
            List<Image> Result = new List<Image>();
            var WG = this.Group.Value;
            while (WG != null)
            {
                Result.AddRange(WG.Images.Where(x => x.Propagate && !x.IsShowInArticle));
                WG = WG.Parent.Value;
            }
            return Result.Count>0?Result[0]:null;
        }
        public string GetPackUnit(string lang) 
        {
            return PackUnit.Value.Html!=null ? Utils.LC(PackUnit.Value.Html, lang) : string.Empty;
        }
        public string GetUnit(string lang)
        {
            return Unit.Value.Html != null ? Utils.LC(Unit.Value.Html, lang) : string.Empty;
        }
        public string GetPackPrice() 
        {
            return (Price * PackAmount).ToStringWithDot();
        }
        public string GetUnitPrice()
        {
            return Price.ToStringWithDot();
        }
        public string GetUnitSalePrice()
        {
            return SalePrice.ToStringWithDot();
        }
        public bool IsOnSale()
        {
            return SalePrice != 0.0;
        }
     
    }
}
