using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.BusinessLogic
{
    public interface IFoodHelper
    {
        List<FoodViewModel> GetFoods();

        FoodViewModel GetFoodDetails(int id);

        void CreateFood(FoodViewModel newItem);

        void UpdateFood(FoodViewModel newItem);

        void DeleteFood(int id);
    }
}
