using Restaurant.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Restaurant.BusinessLogic
{
    public class FoodHelper : IFoodHelper
    {
        private DataAccess.RestaurantDBContext dbContext = new DataAccess.RestaurantDBContext();

        public List<FoodViewModel> GetFoods()
        {
            List<FoodViewModel> foodVM = new List<FoodViewModel>();

            foreach (DataAccess.Food food in dbContext.Foods.ToList())
                foodVM.Add(MapModel(food));

            return foodVM;
        }

        public FoodViewModel GetFoodDetails(int id)
        {
            DataAccess.Food food = dbContext.Foods.Find(id);

            if (food == null)
                return null;

            return MapModel(food);
        }

        public void CreateFood(FoodViewModel newItem)
        {
            dbContext.Foods.Add(MapModel(newItem));
            dbContext.SaveChanges();
        }

        public void UpdateFood(FoodViewModel newItem)
        {
            dbContext.Entry(MapModel(newItem)).State = EntityState.Modified;
            dbContext.SaveChanges();
        }

        public void DeleteFood(int id)
        {
            DataAccess.Food food = dbContext.Foods.Find(id);

            dbContext.Foods.Remove(food);
            dbContext.SaveChanges();
        }

        private DataAccess.Food MapModel(FoodViewModel newItem)
        {
            DataAccess.Food dbRecord = new DataAccess.Food
            {
                ID = newItem.ID,
                Name = newItem.Name,
                Ingredients = newItem.Ingredients,
                Category = (DataAccess.FoodCategory)newItem.Category,
                Price = newItem.Price,
                Quantity = newItem.Quantity,
                ImageName=newItem.ImageName
            };

            return dbRecord;
        }

        private FoodViewModel MapModel(DataAccess.Food food)
        {
            FoodViewModel foodVM = new FoodViewModel
            {
                ID = food.ID,
                Name = food.Name,
                Ingredients = food.Ingredients,
                Category = (FoodCategory)food.Category,
                Price = food.Price,
                Quantity = food.Quantity,
                ImageName = food.ImageName
            };

            return foodVM;
        }
    }
}