using System;

namespace Restaurant.DataAccess
{
    public class Employee
    {
        public int ID { get; set; }

        public int PersonID { get; set; }

        public EmployeeFunction Function { get; set; }

        public DateTime StartDate { get; set; }

        public decimal Salary { get; set; }
    }

    public enum EmployeeFunction
    {
        Chef = 1,
        Manager = 2,
        Waiter = 3
    }
}