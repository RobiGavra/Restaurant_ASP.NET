using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Restaurant.DataAccess
{
    public class RestaurantDBContext : DbContext
    {
        public RestaurantDBContext()
            : base("Data Source=ST121;Initial Catalog=Restaurant;Persist Security Info=True;User ID=sa;Password=Oracle!@#$") { }

        public DbSet<Food> Foods { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Person> Persons { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<Address> Addresses { get; set; }
    }
}