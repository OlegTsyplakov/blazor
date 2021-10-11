using System;
using System.Collections.Generic;
using System.Linq;

namespace Site.Data.DBModel
{
    public class WareFilter
    {
        public List<WareFilterGroup> Groups = new List<WareFilterGroup>();

        public WareFilter()
        {
        }

        public WareFilter(WareGroup Group, bool CollectFromParents)
        {
            var AllFVs = Group.CollectFilterValues(CollectFromParents);

            var grps = AllFVs.GroupBy(x => x.FV.PropType.KeyAsString).ToList();
            for (int i = 0; i < grps.Count; i++)
            {
                var FG = new WareFilterGroup();
                FG.PropValues.AddRange(grps[i]);
                FG.PropType = FG.PropValues[0].FV.PropType.Value;
                Groups.Add(FG);
            }
        }
        public bool HasCheckMarks()
        {
            foreach (var pt in Groups)
            {
                var pvs = pt.PropValues;
                for (int i = 0; i < pvs.Count; i++)
                {
                    if (pvs[i].Checked) return true;
                }
            }

            return false;
        }

        public bool IsEmpty()
        {
            return Groups.Count == 0;
        }
        public void UpdateCheckeds(string C)
        {
            if (string.IsNullOrEmpty(C)) return;

            var cc = C.Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();

            foreach (var pt in Groups)
            {
                var pvs = pt.PropValues;
                for (int i = 0; i < pvs.Count; i++)
                {
                    pvs[i].Checked = cc.IndexOf(pvs[i].FV.IdAsString) >= 0;
                }
            }
        }
        public WareFilter CheckedOnly()
        {
            WareFilter Result = new WareFilter();

            foreach (var pt in Groups)
            {
                List<WareFilterValue> NewList = pt.PropValues.Where(x => x.Checked).ToList();

                if (NewList.Count > 0)
                {
                    WareFilterGroup OneGroup = new WareFilterGroup();
                    OneGroup.PropType = NewList[0].FV.PropType.Value;
                    OneGroup.PropValues = NewList;
                    Result.Groups.Add(OneGroup);
                }
            }

            if (Result.Groups.Count == 0) return null;
            return Result;
        }

        public bool Match(WareItem M, MLStringUse LC)
        {
            return Groups.All(x => x.Match(M, LC));
        }
    }
}
