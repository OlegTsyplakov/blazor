using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site.Data.DBModel
{
    public class DaySchedule
    {
        public DateTime? Begin { get; set; }
        public DateTime? LunchBegin { get; set; }
        public DateTime LunchEnd { get; set; }
        public DateTime End { get; set; }

        public bool IsSame(DaySchedule B)
        {
            return Begin == B.Begin && LunchBegin == B.LunchBegin && LunchEnd == B.LunchEnd && End == B.End;
        }

        public bool IsIn(DateTime Time)
        {
            if (Begin == null) return false;
            TimeSpan T = Time.TimeOfDay;

            bool IsInWD = ((DateTime)Begin).TimeOfDay <= T && T <= End.TimeOfDay;
            if (!IsInWD) return false;

            if (LunchBegin == null) return true;
            return !(((DateTime)LunchBegin).TimeOfDay <= T && T <= LunchEnd.TimeOfDay);
        }
    }
}
