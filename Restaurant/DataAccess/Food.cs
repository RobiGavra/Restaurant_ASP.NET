namespace Restaurant.DataAccess
{
    public class Food
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Ingredients { get; set; }

        public FoodCategory Category { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public string ImageName { get; set; }
    }

    public enum FoodCategory
    {
        Starter = 1,
        MainCourse = 2,
        Soup = 3
    }
}