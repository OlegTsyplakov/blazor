

using static Site.Data.DBModel.Enums;

namespace Site.Data.DBModel
{
    public class WordForms
    {
        public string Nominative { get; set; }
        public string Genitive { get; set; }
        public string Dative { get; set; }
        public string Accusative { get; set; }
        public string Instrumental { get; set; }
        public string Prepositional { get; set; }
        public PrepFormsБез БезРП { get; set; }
        public PrepFormsВ ВВП { get; set; }
        public PrepFormsВ ВПП { get; set; }
        public PrepFormsИз ИзРП { get; set; }
        public PrepFormsК КДП { get; set; }
        public PrepFormsНад НадТП { get; set; }
        public PrepFormsО ОВП { get; set; }
        public PrepFormsО ОПП { get; set; }
        public PrepFormsОт ОтРП { get; set; }
        public PrepFormsПеред ПередТП { get; set; }
        public PrepFormsПод ПодВП { get; set; }
        public PrepFormsПод ПодТП { get; set; }
        public PrepFormsС СРП { get; set; }
        public PrepFormsС СТП { get; set; }
    }
}
