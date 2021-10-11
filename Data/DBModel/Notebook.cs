
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Site.Data.DBModel
{
    public class Notebook : BaseData
    {
      
        public string Person { get; set; }
        [BsonIgnore]
        public List<string> Persons = new List<string>
        {
            "Кикель Александр Владимирович",
            "Кикель Мария Игоревна"
        };
        public string Comment { get; set; }
        public List<Contact> Contacts { get; set; } = new List<Contact>
        {
        new Contact{ Title="Компания", Info=string.Empty},
        new Contact{ Title="Регион", Info=string.Empty},
        new Contact{ Title="Город", Info=string.Empty},
        new Contact{ Title="ФИО", Info=string.Empty},
        new Contact{ Title="Должность", Info=string.Empty},
        new Contact{ Title="Телефон", Info=string.Empty},
        new Contact{ Title="Email", Info=string.Empty}
        };

        public List<Image> Images { get; set; } = new List<Image>();
        public bool NewClient { get; set; }

        public List<CountryOrigin> CountriesOrigin { get; set; } = new List<CountryOrigin>()
        {
            new CountryOrigin{ Title="Китай", IsChecked=false },
            new CountryOrigin{ Title="Италия", IsChecked=false },
            new CountryOrigin{ Title="Турция", IsChecked=false },
            new CountryOrigin{ Title="Чехия", IsChecked=false },
            new CountryOrigin{ Title="Россия", IsChecked=false },
            new CountryOrigin{ Title="Германия", IsChecked=false }
        };
        public List<NotSatisfiedReason> NotSatisfiedReasons { get; set; } = new List<NotSatisfiedReason>()
        {
        new NotSatisfiedReason{ Title="Что не устраивает в действующих поставках?", Reason=string.Empty}
        };
        public SalesChannel SalesChannel { get; set; } = new SalesChannel();

        public List<InterestedIn> InterestedIns { get; set; } = new List<InterestedIn>()
        {
        new InterestedIn{ Title="Полиэтиленовые трубы", IsChecked=false },
        new InterestedIn{ Title="Латунные соединительные элементы", IsChecked=false },
        new InterestedIn{ Title="Полимерные соединительные элементы", IsChecked=false },
        new InterestedIn{ Title="Инструменты для монтажа соединений", IsChecked=false },
        new InterestedIn{ Title="Запорно-регулирующая арматура", IsChecked=false },
        new InterestedIn{ Title="Резьбовые элементы", IsChecked=false },
        new InterestedIn{ Title="Коллекторные группы и комплектующие", IsChecked=false },
        new InterestedIn{ Title="Крепежные и декоративные элементы", IsChecked=false },
        new InterestedIn{ Title="Аксессуары для монтажа теплого пола", IsChecked=false },
        new InterestedIn{ Title="Насосное оборудование", IsChecked=false },
        new InterestedIn{ Title="Котлы / Чиллеры", IsChecked=false },
        new InterestedIn{ Title="Приборы отопления", IsChecked=false },
        new InterestedIn{ Title="Всё", IsChecked=false }
        };
        public List<DirectionOfWork> DirectionOfWorks { get; set; } = new List<DirectionOfWork>()
        {
            new DirectionOfWork{ Title="Строительство", Percentages=string.Empty},
            new DirectionOfWork{ Title="Поставка", Percentages=string.Empty },
            new DirectionOfWork{ Title="Производство", Percentages=string.Empty },
        };
        public List<NextStep> NextSteps { get; set; } = new List<NextStep>()
        {
            new NextStep{ Title="Звонок", IsChecked=false, Date=DateTime.MinValue, HourMinute=string.Empty },
            new NextStep{ Title="Встреча", IsChecked=false, Date=DateTime.MinValue, HourMinute=string.Empty },
            new NextStep{ Title="Прайс", IsChecked=false, Date=DateTime.MinValue, HourMinute=string.Empty },
            new NextStep{ Title="Другое", IsChecked=false, Date=DateTime.MinValue, HourMinute=string.Empty }
        };

        public List<PurchasePotential> PurchasePotentials { get; set; } = new List<PurchasePotential>()
        {
            new PurchasePotential{  Title="Работаю контейнерами постоянно", IsChecked=false },
            new PurchasePotential{  Title="Готов купить контейнер к сезону", IsChecked=false },
            new PurchasePotential{  Title="Могу расмотреть контейнер при определенных условиях", IsChecked=false },
            new PurchasePotential{  Title="Работаю с частными объектами", IsChecked=false },
            new PurchasePotential{  Title="Работаю со строительными объектами", IsChecked=false }
        };
    }

    public class SalesChannel
    {
        public bool Wholesale { get; set; }
        public bool Retail { get; set; }
        public string NumberOfStores { get; set; }

        public List<string> ConstructionObjects { get; set; } = new List<string> { "" };
        public bool OnlineSales { get; set; }

        public List<string> Websites { get; set; } = new List<string> { "" };
    }
    public class CountryOrigin
    {
        public string Title { get; set; }
        public bool IsChecked { get; set; }
    }
    public class Contact
    {
        public string Title { get; set; }
        public string Info { get; set; }
    }
    public class NotSatisfiedReason
    {
        public string Title { get; set; }
        public string Reason { get; set; }
    }
    public class InterestedIn
    {
        public string Title { get; set; }
        public bool IsChecked { get; set; }
    }
    public class DirectionOfWork
    {
        public string Title { get; set; }
        public string Percentages { get; set; }
    }
    public class NextStep
    {
        public string Title { get; set; }
        public bool IsChecked { get; set; }
        public DateTime Date { get; set; }
        public string HourMinute { get; set; }

    }
    public class PurchasePotential
    {
        public string Title { get; set; }
        public bool IsChecked { get; set; }
    }
    public class ImagesUpload
    {
        public string Status = "No";
        public List<string> Urls = new List<string>();
    }
}
