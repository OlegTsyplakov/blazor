

using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class BranchAddress : BaseData
    {
        public NBranchType BranchType { get; set; }
        public MLString Description { get; set; } = new MLString();
        public MLString Country { get; set; } = new MLString();
        public MLString Region { get; set; } = new MLString();
        public string GeoIPRegionCode { get; set; }
        public MLString Organization { get; set; } = new MLString();
        public string ZipCode { get; set; }
        public MLString City { get; set; } = new MLString();
        public MLString StreetAddress { get; set; } = new MLString();

        public LookupRef<Region> RegionRef { get; set; } = new LookupRef<Region>();
        public string PhoneExt { get; set; }
        public string PhoneExtFor8800 { get; set; }

        public List<string> Phones { get; set; } = new List<string>();
        [BsonIgnore] 
        public List<ParsedPhone> ParsedPhones;
        public string EMail { get; set; }
        public MLString ContactPersonName { get; set; } = new MLString();

        public LookupRef<User> Manager { get; set; } = new LookupRef<User>();
        public bool UseManagersContact { get; set; }

        public MLString SalesDeptName { get; set; } = new MLString();
        public MLString WorkHours { get; set; } = new MLString();
        public string PhoneHours { get; set; }
        public double TZOffset { get; set; }
        public string MapCoords { get; set; }
        public int MapDefaultZoom { get; set; }

        public MLString GoogleMapsLink { get; set; } = new MLString();
        public MLString YandexMapsLink { get; set; } = new MLString();
        public MLString DrivingGuideWideVideo { get; set; } = new MLString();
        public MLString DrivingGuideNarrowVideo { get; set; } = new MLString();
        public MLString DrivingGuideYoutubeWideVideo { get; set; } = new MLString();
        public MLString DrivingGuideYoutubeNarrowVideo { get; set; } = new MLString();
        public MLString DrivingGuide { get; set; } = new MLString();
        public MLString DeliveryText { get; set; } = new MLString();

        public string LandingEmails { get; set; }

        public bool ProvidesInstallation { get; set; }
        public bool ShowInList { get; set; } = true; // показывать в списке на лендинге оптимы
        public bool ShowPlacemark { get; set; } = true; // показывать на карте на лендинге оптимы
        public bool ShopSelfPickupPlace { get; set; } // задумывалось как указатель на то, что в регионе можно забирать здесь. Пока не используется.
        public bool ShopUseSubDomain { get; set; }
        public string ShopSubDomain { get; set; }
        public string YandexMetrikaId { get; set; }
        public string SpecificExcelFile { get; set; }
        public WordForms RegionRu { get; set; } = new WordForms();

        public List<PaymentProviderCode> AvailablePaymentProviders { get; set; } = new List<PaymentProviderCode>();
    }
}
