using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class RegisterViewModel
    {
        public string RegName { get; set; }
        public string RegPhone { get; set; }
        public string RegEmail { get; set; }
        public string RegPassword { get; set; }
        public string RegConfirmPassword { get; set; }
        public string RegReturnUrl { get; set; }
        public string RegCaptcha { get; set; }
        public bool RegAgree { get; set; }
        public bool RegNeedConfirmCode { get; set; }
        public string RegTIN { get; set; } // Это ИНН
        public string RegKPP { get; set; }
        public string RegContactPosition { get; set; }
        public string RegContactPerson { get; set; }
        public string RegUrAddress { get; set; }
        public ClientKind Kind { get; set; }
    }
}
