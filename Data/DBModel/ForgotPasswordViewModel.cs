
using System.ComponentModel.DataAnnotations;


namespace Site.Data.DBModel
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

    }
}
