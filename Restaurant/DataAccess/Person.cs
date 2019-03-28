using System;
using System.ComponentModel.DataAnnotations;

namespace Restaurant.DataAccess
{
    public class Person
    {
        public int ID { get; set; }

        public int AddressID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public int Age { get; set; }
    }
}