using Restaurant.BusinessLogic;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace Restaurant
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            UnityContainer container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IEmployeeHelper, EmployeeHelper>();
            container.RegisterType<IReservationHelper, ReservationHelper>();
            container.RegisterType<IFoodHelper, FoodHelper>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}