using Restaurant.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Restaurant.BusinessLogic
{
    public class EmployeeHelper : IEmployeeHelper
    {
        private DataAccess.RestaurantDBContext dbContext = new DataAccess.RestaurantDBContext();

        public List<EmployeeViewModel> GetEmployees()
        {
            List<EmployeeViewModel> employeeVM = new List<EmployeeViewModel>();

            foreach (DataAccess.Employee employee in dbContext.Employees.ToList())
                employeeVM.Add(MapEmpViewModel(employee));

            return employeeVM;
        }

        public EmployeeViewModel GetEmployeeDetails(int id)
        {
            DataAccess.Employee employee = dbContext.Employees.Find(id);

            if (employee == null)
                return null;

            return MapEmpViewModel(employee);
        }

        public void CreateEmployee(EmployeeViewModel newItem)
        {
            DataAccess.Address address = MapAddressModel(newItem);
            dbContext.Addresses.Add(address);
            dbContext.SaveChanges();

            DataAccess.Person person = MapPersonModel(newItem, address.ID);
            dbContext.Persons.Add(person);
            dbContext.SaveChanges();

            dbContext.Employees.Add(MapEmpModel(newItem, person.ID));
            dbContext.SaveChanges();
        }

        public void UpdateEmployee(EmployeeViewModel record)
        {
            DataAccess.Employee employee = MapEmpModel(record, record.PersonDetails.ID);
            employee.ID = record.ID;

            dbContext.Entry(employee).State = EntityState.Modified;
            dbContext.SaveChanges();

            DataAccess.Person person = MapPersonModel(record, record.PersonDetails.AddressDetails.ID);
            person.ID = employee.PersonID;

            dbContext.Entry(person).State = EntityState.Modified;
            dbContext.SaveChanges();

            DataAccess.Address address = MapAddressModel(record);
            address.ID = person.AddressID;

            dbContext.Entry(address).State = EntityState.Modified;
            dbContext.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            DataAccess.Employee employee = dbContext.Employees.Find(id);
            DataAccess.Person person = dbContext.Persons.Find(employee.PersonID);
            DataAccess.Address adress = dbContext.Addresses.Find(person.AddressID);

            dbContext.Employees.Remove(employee);
            dbContext.Persons.Remove(person);
            dbContext.Addresses.Remove(adress);
            dbContext.SaveChanges();
        }

        private EmployeeViewModel MapEmpViewModel(DataAccess.Employee employee)
        {
            DataAccess.Person person = dbContext.Persons.Find(employee.PersonID);
            DataAccess.Address address = dbContext.Addresses.Find(person.AddressID);

            EmployeeViewModel employeeVM = new EmployeeViewModel
            {
                ID = employee.ID,
                Function = (EmployeeFunction)employee.Function,
                StartDate = employee.StartDate,
                Salary = employee.Salary,
                PersonDetails = new PersonModel
                {
                    ID = person.ID,
                    FirstName = person.FirstName,
                    LastName = person.LastName,
                    Age = person.Age,
                    Email = person.Email,
                    PhoneNumber = person.PhoneNumber,
                    AddressDetails = new AddressModel
                    {
                        ID = address.ID,
                        Street = address.Street,
                        Number = address.Number,
                        City = address.City,
                        Region = address.Region,
                        Apartment = address.Apartment
                    }
                }
            };

            return employeeVM;
        }

        private DataAccess.Employee MapEmpModel(EmployeeViewModel employeeVM, int personID)
        {
            DataAccess.Employee employee = new DataAccess.Employee
            {
                Function = (DataAccess.EmployeeFunction)employeeVM.Function,
                Salary = employeeVM.Salary,
                StartDate = employeeVM.StartDate,
                PersonID = personID
            };

            return employee;
        }

        private DataAccess.Person MapPersonModel(EmployeeViewModel employeeVM, int adressID)
        {
            DataAccess.Person person = new DataAccess.Person
            {
                FirstName = employeeVM.PersonDetails.FirstName,
                LastName = employeeVM.PersonDetails.LastName,
                Age = employeeVM.PersonDetails.Age,
                Email = employeeVM.PersonDetails.Email,
                PhoneNumber = employeeVM.PersonDetails.PhoneNumber,
                AddressID = adressID
            };

            return person;
        }

        private DataAccess.Address MapAddressModel(EmployeeViewModel employeeVM)
        {
            DataAccess.Address address = new DataAccess.Address
            {
                Street = employeeVM.PersonDetails.AddressDetails.Street,
                Number = employeeVM.PersonDetails.AddressDetails.Number,
                City = employeeVM.PersonDetails.AddressDetails.City,
                Region = employeeVM.PersonDetails.AddressDetails.Region,
                Apartment = employeeVM.PersonDetails.AddressDetails.Apartment
            };

            return address;
        }
    }
}