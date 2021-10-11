

namespace Site.Data.DBModel
{
    public class TFeedback : BaseData
    {
        public string Email { get; set; }
        public string FIO { get; set; }
        public string Department { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
        public string Metr { get; set; }
        public string Address { get; set; }
        public string Bp { get; set; }
        public string Typeofwork { get; set; }
        public string Typeofservice { get; set; }
        public string Price { get; set; }
        public string File_check_yesno { get; set; }
        public string SourceAddress { get; set; }
        public string AttachedFileName { get; set; }
        public bool Success { get; set; }
    }
}
