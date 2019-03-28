using Restaurant.Models;
using System.Collections.Generic;

namespace Restaurant.BusinessLogic
{
    public interface IEmployeeHelper
    {
        List<EmployeeViewModel> GetEmployees();

        EmployeeViewModel GetEmployeeDetails(int id);

        void CreateEmployee(EmployeeViewModel newItem);

        void UpdateEmployee(EmployeeViewModel record);

        void DeleteEmployee(int id);
    }
}
