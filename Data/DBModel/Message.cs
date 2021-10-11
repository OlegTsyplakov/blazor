

using System;
using System.Collections.Generic;
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class Message : BaseData
    {
        public MLString From { get; set; } = new MLString(Ru: "ТСД БИР ПЕКС", En: "TCH BYR PEX");
        public Period Period { get; set; } = new Period();
        public MLString Description { get; set; }
        public bool IsPermanently { get; set; }
        public SentTo SentTo { get; set; }
        public List<string> ClientId { get; set; } = new List<string>();
    }
    public class Period
    {
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}
