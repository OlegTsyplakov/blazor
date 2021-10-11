using Site.Data.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Site.Data.DBModel
{
    public class WeekSchedule
    {
        public static MLString[] DaysShortNames = new MLString[] {
            new MLString() { En = "Su", Ru = "Вс" },
            new MLString() { En = "Mo", Ru = "Пн" },
            new MLString() { En = "Tu", Ru = "Вт" },
            new MLString() { En = "We", Ru = "Ср" },
            new MLString() { En = "Th", Ru = "Чт" },
            new MLString() { En = "Fr", Ru = "Пт" },
            new MLString() { En = "Sa", Ru = "Сб" },
        };

        public List<DaySchedule> Days = new List<DaySchedule>();

        public WeekSchedule() { }

        public WeekSchedule(string S)
        {
            ParseDayScheduleString(S);
        }

        void ParseDayScheduleString(string S)
        {
            Days.Clear();
            for (int i = 0; i < 7; i++)
                Days.Add(new DaySchedule());

            if (string.IsNullOrEmpty(S))
                return;

            var r0 = S.Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var ds in r0)
            {
                var r1 = ds.Split(new char[] { '@' }, StringSplitOptions.RemoveEmptyEntries);
                if (r1.Length < 2) continue;

                var r21 = r1[0].Split(new char[] { '-', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                if (r21.Length == 0) continue;
                int d0, d1;
                if (!Int32.TryParse(r21[0], out d0))
                    continue;
                if (r21.Length == 1)
                {
                    d1 = d0;
                }
                else
                {
                    if (!Int32.TryParse(r21[1], out d1))
                        continue;
                }

                DateTime[] dts = new DateTime[4];
                var r22 = r1[1].Split(new char[] { '-', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                if (r22.Length != 2 && r22.Length != 4)
                    continue;

                bool AllParsed = true;
                for (int i = 0; AllParsed && i < r22.Length; i++)
                    AllParsed = DateTime.TryParse(r22[i], out dts[i]);

                if (!AllParsed)
                    continue;

                for (int i = d0; i <= d1; i++)
                {
                    int i1 = i % 7;
                    Days[i1].Begin = dts[0];
                    if (r22.Length == 2)
                    {
                        Days[i1].End = dts[1];
                    }
                    else
                    {
                        Days[i1].LunchBegin = dts[1];
                        Days[i1].LunchEnd = dts[2];
                        Days[i1].End = dts[3];
                    }
                }
            }
        }

        public string GetReadable(string lang)
        {
            StringBuilder SB = new StringBuilder();

            int i0 = 1, i1;
            DaySchedule D0 = Days[i0];

            for (int i = 2; i <= 8; i++)
            {
                if (i < 8 && Days[i % 7].IsSame(D0)) continue;
                i1 = i - 1;

                DumpDay(lang, SB, i0, i1, D0);

                if (i1 < 7)
                {
                    i0 = i1 + 1;
                    SB.Append(", ");
                    D0 = Days[i0 % 7];
                }
            }

            return SB.ToString();
        }

        private static void DumpDay(string lang, StringBuilder SB, int i0, int i1, DaySchedule D0)
        {
            SB.Append(Utils.LC(DaysShortNames[i0 % 7],lang));
            if (i1 != i0)
            {
                SB.Append("-");
                SB.Append(Utils.LC(DaysShortNames[i1 % 7],lang));
            }
            SB.Append(": ");

            if (D0.Begin == null)
            {
                SB.Append(Utils.LC(MLText.NonWorkingDay,lang));
            }
            else
            {
                SB.Append(((DateTime)D0.Begin).ToString("HH:mm"));
                SB.Append("-");
                SB.Append(D0.End.ToString("HH:mm"));

                if (D0.LunchBegin != null)
                {
                    SB.Append(", ");
                    SB.Append(Utils.LC(MLText.Lunch,lang));
                    SB.Append(" ");
                    SB.Append(((DateTime)D0.LunchBegin).ToString("HH:mm"));
                    SB.Append("-");
                    SB.Append(D0.LunchEnd.ToString("HH:mm"));
                }
            }
        }
    }
}
