using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Restaurant.Models
{
    public class AddressModel
    {
        public int ID { get; set; }
       
        public string Region { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public int Number { get; set; }

        public int Apartment { get; set; }

        public string GetFullAddress()
        {
            if(Apartment>0)
                return Region + " , Loc." + City + " , Str. " + Street + " , Nr. " + Number+" , Ap. "+Apartment;

            return Region + " , Loc." + City + " , Str. " + Street + " , Nr. " + Number; 
        }
    }

}