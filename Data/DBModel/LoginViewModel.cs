namespace Site.Data.DBModel
{
    public class LoginViewModel
    {

        public string LoginEmail { get; set; }
        public string LoginPassword { get; set; }
        public bool LoginRememberMe { get; set; }
        public string LoginReturnUrl { get; set; }
        public string LoginStatus { get; set; } = "new";
    }
}
