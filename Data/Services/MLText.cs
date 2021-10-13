

namespace Site.Data.Services
{
    public static class MLText
    {
       public static MLString Description = MLString.MLS("Описание", "Description");
       public static MLString Note = MLString.MLS("Примечание", "Note");
       public static MLString NonWorkingDay = new MLString() { En = "Nonworking Day", Ru = "выходной" };
       public static MLString Lunch = new MLString() { En = "Lunch", Ru = "обед" };
        public static MLString AlsoRecommended = MLString.MLS("Также рекомендуется", "Also Recommended");
        public static MLString Decrease = MLString.MLS("Уменьшить количество", "Decrease quantity");
        public static MLString Increase = MLString.MLS("Увеличить количество", "Increase quantity");
        public static MLString According = MLString.MLS("Исходя из количества других товаров в корзине", "According to the quantity of other articles in the cart");
        public static MLString Required = MLString.MLS("Требуется: ", "Required: ");
        public static MLString Items = MLString.MLS("Товары", "Items");
        public static MLString Details = MLString.MLS("Подробнее", "Details");
        public static MLString Price = MLString.MLS("Цена", "Price");
        public static MLString AddToCart = MLString.MLS("Добавить в корзину", "Add to cart");
        public static MLString AlsoRequired = MLString.MLS("Также требуется", "Also Required");
        public static MLString Article = MLString.MLS("Артикул", "Article");
    }
}
