using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Restaurant.Models
{
    public class PersonModel
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "The name is required!")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "The name is required!")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Phone number")]
        [Required(ErrorMessage = "The phone number is required!")]
        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        [Required(ErrorMessage = "The age is required!")]
        public int Age { get; set; }

        [Display(Name = "Address details")]
        public AddressModel AddressDetails { get; set; }
    }
}