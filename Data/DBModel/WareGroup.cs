

using MongoDB.Bson.Serialization.Attributes;

using System.Collections.Generic;
using System.Linq;

namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
    public class WareGroup : WareCommon
    {
        public List<string> UnifyingFeatureReference { get; set; } = new List<string>();
        public MLString HtmlName { get; set; } = new MLString();
        public MLString HtmlNameCommon { get; set; } = new MLString();
        public MLString HtmlNameParticular { get; set; } = new MLString();
        public bool IncludeInParent { get; set; }
        public bool IncludeInSiteMap { get; set; } = true;
        public List<string> ExludeFromProperties { get; set; } = new List<string>();
        public string SDR { get; set; }
        public string PSO { get; set; }
        public bool Archive { get; set; }
        public bool MainProduct { get; set; }
     
        [BsonIgnoreIfDefault]
        public LookupRef<WareGroup> Parent { get; set; } = new LookupRef<WareGroup>();

        public List<ColumnDesc> ColumnDescs { get; set; } = new List<ColumnDesc>();

        public bool ShowImagesInTable { get; set; }

        public LookupRef<DiscountGroup> DiscountGroup { get; set; } = new LookupRef<DiscountGroup>();


        public List<FilterValueRef> FilterValues2 { get; set; } = new List<FilterValueRef>();


        public DiscountGroup GetActualDiscountGroup()
        {
            if (DiscountGroup.Value != null) return DiscountGroup.Value;
            return Parent?.Value?.GetActualDiscountGroup();
        }
        public List<FakeChild> FakeChildren { get; set; } = new List<FakeChild>();

        public List<PresetFilter> PresetFilters { get; set; } = new List<PresetFilter>();

        public List<PresetFilter2> PresetFilters2 { get; set; } = new List<PresetFilter2>();

        public List<GroupUnitCaption> UnitCaptions { get; set; } = new List<GroupUnitCaption>();

        public string YandexMarketCategory { get; set; }



        public WareGroup TopParent
        {
            get
            {
                WareGroup Result = this;
                while (Result?.Parent?.Value != null)
                {
                    Result = Result.Parent.Value;
                }
                return Result;
            }
        }
       public List<File> CollectFiles()
        {
            WareGroup WG = this;
            List<File> Result = WG.Files.Select(x => x.Ref?.Value).Where(x => x != null && x.Published).ToList();
            while (WG?.Parent?.Value != null)
            {
                WG = WG.Parent.Value;
                Result.AddRange(WG.Files.Select(x => x.Ref?.Value).Where(x => x != null && x.Published).ToList());
            }
            return Result;
        }
        public string GetPSO()
        {
            WareGroup WG = this;
            if (WG.PSO != null)
                return WG.PSO;
            while (WG?.Parent?.Value != null)
            {
                WG = WG.Parent.Value;
                if (WG.PSO != null)
                {
                    break;
                }
            }
            return WG.PSO??string.Empty;
        }
        public string GetSDR()
        {
            string sdr = string.Empty;
            var group_pointer = this;
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
        public Image GetMainImage()
        {
            if (Images.Count > 0)
                return Images[0];
            List<Image> Result = new List<Image>();
            var WG = this;
            while (WG != null)
            {
                Result.AddRange(WG.Images.Where(x => x.Propagate && !x.IsShowInArticle));
                WG = WG.Parent.Value;
            }
            return Result.Count > 0 ? Result[0] : null;
        }
        public List<RecommendedGroup> GetAlsoRecommendedGroup() 
        {
            List<RecommendedGroup> ResultWG = new List<RecommendedGroup>();
        
                var G = this;
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
        
            var G = this;
            while (G != null)
            {
                foreach (var i in G.AlsoRecommendedItems2) if (i.Propagate) ResultWI.Add(i);
                G = G.Parent.Value;
            }
            return ResultWI;
        }
        internal List<Property> CollectPropertiesInner(bool IngorePropagateOnThis)
        {
            List<Property> AllProps = new List<Property>();
            WareGroup G = this;

            while (G != null)
            {
                AllProps.AddRange(G.Properties.Where(x => x.Propagate || (G == this && IngorePropagateOnThis)).Where(x => x.IsShowInMainContainer));
                G = G.Parent.Value;
            }

            return AllProps;
        }

        public List<Property> CollectProperties()
        {
            List<Property> AllProps = CollectPropertiesInner(true);
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
        public List<WareFilterValue> CollectFilterValues(bool CollectFromParents)
        {
            int i;
            List<WareFilterValue> Result = new List<WareFilterValue>();
            foreach (var FV2 in FilterValues2)
            {
                FilterValue FV = FV2.Ref?.Value;
                if (FV != null)
                    Result.Add(new WareFilterValue() { FV = FV });
            }

            if (CollectFromParents)
            {
                WareGroup G = Parent.Value;
                while (G != null)
                {
                    foreach (var FV2 in G.FilterValues2)
                    {
                        if (FV2.Propagate)
                        {
                            FilterValue FV = FV2.Ref?.Value;
                            if (FV != null)
                                Result.Add(new WareFilterValue() { FV = FV });
                        }
                    }
                    G = G.Parent.Value;
                }
            }

            // !!! Порядок - более вложенные имеют приоритет.
            for (i = 0; i < Result.Count - 1; i++)
            {
                var K = Result[i].FV.IdAsString;
                for (int j = i + 1; j < Result.Count;)
                {
                    if (Result[j].FV.IdAsString == K)
                    {
                        Result.RemoveAt(j);
                    }
                    else
                    {
                        j++;
                    }
                }
            }

            return Result;
        }
        public List<Property> CollectPropertiesGroup(WareGroup WG)
        {
            bool efp = false;
            List<Property> AllProps = new List<Property>();
            List<string> ExProps = new List<string>();
            AllProps.AddRange(WG.Properties.Where(x => x.Propagate && !x.Hidden && x.IsShowInGroupContainer));
            while (WG != null)
            {
                if (WG.ExludeFromProperties.Count > 0)
                {
                    ExProps = WG.ExludeFromProperties;
                    efp = true;
                }
                WG = WG.Parent.Value;
                if (WG != null)
                {
                    if (efp)
                    {
                        AllProps.AddRange(WG.Properties.Where(x => x.Propagate && !x.Hidden && x.IsShowInGroupContainer && !ExProps.Contains(x.PropType.KeyAsString)));
                    }
                    else
                    {
                        AllProps.AddRange(WG.Properties.Where(x => x.Propagate && !x.Hidden && x.IsShowInGroupContainer));
                    }

                }
            }
            return AllProps;
        }
    }
}
