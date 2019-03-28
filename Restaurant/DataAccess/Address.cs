using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Restaurant.DataAccess
{
    public class Address
    {
        public int ID { get; set; }

        public string City { get; set; }

        public string Region { get; set; }

        public string Street { get; set; }

        public int Number { get; set; }

        public int Apartment { get; set; }
    }
}