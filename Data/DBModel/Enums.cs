
namespace Site.Data.DBModel
{
    public class Enums
    {
        public enum FileKind { NotSpecified, Catalog, Manual, Certificate, Protocol, Evidence, Declaration, Conclusion, Letter, License, Normative, Award, Passport, Trademark, Warranty, Software, Patent }
        public enum DocDateMode { NoDates, IssuedOn, ValidSince, ValidTill, ValidSinceTill }
        public enum CorpSiteFileCategory { None, Certificates, Licenses, Evidences, ForDownload }
        public enum SentTo { Organization, Person, All }
        public enum ClientKind { Person = 0, Organization = 1 }
        public enum ClientAccountState { Created = 0, Active = 1, Blocked = 2}
        public enum ClientControlMode { None = 0, Purchase = 1, Administer = 2 }
        public enum NBranchType { Headquarter, OwnBranch, Representative, Dealer }
        public enum PrepFormsБез { без, безо }
        public enum PrepFormsВ { в, во }
        public enum PrepFormsИз { из, изо }
        public enum PrepFormsК { к, ко }
        public enum PrepFormsНад { над, надо }
        public enum PrepFormsО { о, об, обо }
        public enum PrepFormsОт { от, ото }
        public enum PrepFormsПеред { перед, передо }
        public enum PrepFormsПод { под, подо }
        public enum PrepFormsС { с, со }
        public enum PaymentMethod
        {
            Cash = 10,
            BankCardOffline = 20,
            Invoice = 50,
            BankCardOnline = 100,
        }

        public enum PaymentProviderCode
        {
            Cash = 10,
            BankCardToOffice = 21,
            BankCardToCourier = 22,
            Invoice = 50,
            Alfabank = 101
        }

        public enum PaymentState
        {
            InProcess = 0,
            Failure = 1,
            Success = 2,
        }
        public enum PaymentStatus
        {
            NotPaid = 0,
            Paid = 1,
            PartiallyPaid = 2,
        }
        public enum OrderState
        {
            Undefined = -1,
            InCreation = 0,
            CancelledByPurchaser = 1,
            CancelledByManager = 2,
            ConfirmedByPurchaser = 3,
            LockedByManager = 4,
            ConfirmedByManager = 5,
            Consensus = 6,
            CollectedByPurchaser = 7,
            Returned = 8,
            Refunded = 9,
            Paid = 10,
        }
        public enum DeliveryState
        {
            NotIssued = 0,
            Issued = 1,
            PartiallyIssued = 2,
            BeingGathered = 10,
            Gathered = 11,
            HandedForDelivery = 12,
            BeingDelivered = 13,
            Delivered = 14,
        }
    
    }
}
