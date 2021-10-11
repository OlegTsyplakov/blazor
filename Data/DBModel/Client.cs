

using System;
using System.Collections.Generic;
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class Client : BaseData
    {
        public DateTime LastTimeLogin { get; set; }
        public bool IsSocial { get; set; }
        public DateTime CreatedOn { get; set; }
        public ClientKind Kind { get; set; }
        public ClientAccountState State { get; set; }
        public string ConfirmationToken { get; set; }
        public string PreferredLanguageCode { get; set; } = "ru";
        public string TIN { get; set; } // Это ИНН
        public string KPP { get; set; }
        public string UrAddress { get; set; }
        public double Bonus { get; set; }
        public Phased<string> Email { get; set; } = new Phased<string>();
        public Phased<string> Password { get; set; } = new Phased<string>();
        public Phased<string> PIN { get; set; } = new Phased<string>();
        public Phased<string> DeliveryAddress { get; set; } = new Phased<string>(); // старый
        public string ContactPosition { get; set; }
        public DA DA { get; set; } = new DA();// новый DeliveryAddress основной 
        public List<DA> DA_Additional { get; set; } = new List<DA>();// новый DeliveryAddress дополнительные 
        public Phased<string> ContactPerson { get; set; } = new Phased<string>();
        public Phased<string> ContactPhone { get; set; } = new Phased<string>();
        public List<ClientAndControl> Controls { get; set; } = new List<ClientAndControl>();
        public List<WareGroupDiscount> GroupDiscounts { get; set; } = new List<WareGroupDiscount>();
        public LookupRef<Currency> DefaultCurrency { get; set; } = new LookupRef<Currency>();
        public bool AdvicesPassed { get; set; }
        public bool AdvicesDiscountApplied { get; set; }
        public LookupRef<Order> CurrentOrder { get; set; } = new LookupRef<Order>();
    }
}
