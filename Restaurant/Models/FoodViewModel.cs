using System.ComponentModel.DataAnnotations;
using System.Web;

namespace Restaurant.Models
{
    public class FoodViewModel
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "The name is required!")]
        public string Name { get; set; }

        public string Ingredients { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Select a correct category")]
        public FoodCategory Category { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public string QuantityAsString
        {
            get
            {
                return string.Format("{0} gr", Quantity);
            }
        }

        public string PriceAsString
        {
            get
            {
                return string.Format("{0:C}", Price);
            }
        }

        public string ImageName { get; set; }
    }

    public enum FoodCategory
    {
        Starter = 1,
        MainCourse = 2,
        Soup = 3
    }
}