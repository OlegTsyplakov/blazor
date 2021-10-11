

using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    [BsonIgnoreExtraElements]
    public class Order : BaseData
    {
        public bool SyncRequired { get; set; }
        public bool Deleted { get; set; }
        public string Number { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime UpdatedOn { get; set; }
        public LookupRef<Client> Purchaser { get; set; } = new LookupRef<Client>();
        public LookupRef<Client> Payer { get; set; } = new LookupRef<Client>();
        public LookupRef<Currency> Currency { get; set; } = new LookupRef<Currency>();
        public double CurrencyRate { get; set; } // to be able to restore prices at checkout.
        public List<OrderLine> Lines { get; set; } = new List<OrderLine>();
        public double DeliveryBalance { get; set; }
        public bool DeliveryRequired { get; set; }
        public string DeliveryAddress { get; set; }
        public string PickUpPoint { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPhone { get; set; }
        public string Comment { get; set; }
        public string Email { get; set; }
        public PaymentProviderCode PreferredPaymentProviderCode { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
        public double PaymentBalance { get; set; }
        public LookupRef<PromoCode> Promocode { get; set; } = new LookupRef<PromoCode>();

        public Phased<OrderStateInfo> StateHistory { get; set; } = new Phased<OrderStateInfo>();
        public Phased<PaymentInfo> PaymentHistory { get; set; } = new Phased<PaymentInfo>();
        public Phased<DeliveryInfo> DeliveryHistory { get; set; } = new Phased<DeliveryInfo>();

        public LookupRef<BranchAddress> Branch { get; set; } = new LookupRef<BranchAddress>();
        public bool IsQuantityInStock { get; set; }
        public bool IsByrpex { get; set; } = false;
        public bool IsAllSizesAreSpecified { get; set; }
        [BsonIgnore]
        public int ArtCount;
        [BsonIgnore]
        public double UnitCount;
        [BsonIgnore]
        public double TotalSum;
        [BsonIgnore]
        public double TotalSumDisc;
        [BsonIgnore]
        public string TotalSumDiscStr;
        [BsonIgnore]
        public string TotalSumDiscShortStr;
    }
}
