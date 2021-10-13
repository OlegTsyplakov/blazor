using System.Linq;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using Site.Data.Services;

namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
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
        public List<Property> CollectPropertiesGroupArticleTab()
        {
            WareGroup G = this.Group.Value;
            WareItem Item = this;
            bool efp = false;
            List<Property> AllProps = new List<Property>();
            List<string> ExProps = new List<string>();
            if (Item.ExludeFromProperties.Count() > 0)
            {
                ExProps = Item.ExludeFromProperties;
                efp = true;
            }

            AllProps.AddRange(Item.Properties.Where(x => !x.IsShowInMainContainer));
            while (G != null)
            {

                if (efp)
                {
                    AllProps.AddRange(G.Properties.Where(x => x.Propagate && !x.IsShowInMainContainer && !ExProps.Contains(x.PropType.KeyAsString)));
                }
                else
                {
                    AllProps.AddRange(G.Properties.Where(x => x.Propagate && !x.IsShowInMainContainer));
                }
                if (G.ExludeFromProperties.Count > 0)
                {
                    ExProps = G.ExludeFromProperties;
                    efp = true;
                }


                G = G.Parent.Value;
            }
            RemoveDuplicateProperties(AllProps);
            return AllProps;
        }
        public List<Property> CollectPropertiesGroupArticle()
        {
            WareGroup G = Group.Value;
            WareItem Item = this;
            bool efp = false;
            List<Property> AllProps = new List<Property>();
            List<string> ExProps = new List<string>();
            if (Item.ExludeFromProperties.Count > 0)
            {
                ExProps = ExProps.Concat(Item.ExludeFromProperties).ToList();
                efp = true;
            }

            AllProps.AddRange(Item.Properties.Where(x => x.IsShowInMainContainer && !x.Hidden));


            while (G != null)
            {
                if (efp)
                {
                    AllProps.AddRange(G.Properties.Where(x => x.Propagate && x.IsShowInMainContainer && !x.Hidden && !ExProps.Contains(x.PropType.KeyAsString)));
                }
                else
                {
                    AllProps.AddRange(G.Properties.Where(x => x.Propagate && x.IsShowInMainContainer && !x.Hidden));
                }

                if (G.ExludeFromProperties.Count > 0)
                {
                    ExProps = ExProps.Concat(G.ExludeFromProperties).ToList();
                    efp = true;
                }
                G = G.Parent.Value;
            }
            RemoveDuplicateProperties(AllProps);
            return AllProps;
        }
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
        public bool IsUsePack() { 
        
        return PackAmount != 1.0;
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
        public List<RecommendedGroup> GetAlsoRecommendedGroup()
        {
            List<RecommendedGroup> ResultWG = new List<RecommendedGroup>();
            ResultWG.AddRange(AlsoRecommendedGroups2);

            var G = Group.Value;
            while (G != null)
            {
                foreach (var i in G.AlsoRecommendedGroups2) if (i.Propagate) ResultWG.Add(i);
                G = G.Parent.Value;
            }
            return ResultWG;
        }
        public List<RecommendedItem> GetAlsoRecommendedItems()
        {
            List<RecommendedItem> ResultWI = new List<RecommendedItem>();
            ResultWI.AddRange(AlsoRecommendedItems2);
            var G = Group.Value; 
            while (G != null)
            {
                foreach (var i in G.AlsoRecommendedItems2) if (i.Propagate) ResultWI.Add(i);
                G = G.Parent.Value;
            }
            return ResultWI;
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
        public string GetPackSalePrice()
        {
            return (SalePrice * PackAmount).ToStringWithDot();
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
        public Vendor GetVendor()
        {
            Vendor Vendor = this.Vendor.Value;
            if (Vendor == null)
            {
                var G = Group.Value;
                while (G != null && Vendor == null)
                {
                    Vendor = G.Vendor.Value;
                    G = G.Parent.Value;
                }
            }
            return Vendor;
        }
        public List<Image> CollectImages()
        {
            List<Image> Result = new List<Image>();
            Result.AddRange(Images);
            Result.AddRange(Group?.Value?.CollectPropagatedImages());
            return Result;
        }
        public bool IsByrpexOrEagle()
        {
            WareItem wi = this;
            var group_pointer = wi.Group.Value;
            var top_group = wi.Group.Value.TopParent;

            while (group_pointer.Vendor.KeyAsString == "000000000000000000000000")
            {
                if (group_pointer == top_group) { break; }
                group_pointer = group_pointer.Parent.Value;
            }
            if (group_pointer.Vendor.KeyAsString != "000000000000000000000000" && (group_pointer.Vendor.Value.Name.Ru == "БирПекс" || group_pointer.Vendor.Value.Name.Ru == "Игл-БирПекс"))
            {
                return true;

            }
            return false;
        }

    }
}
