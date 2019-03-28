using System;
using System.ComponentModel.DataAnnotations;

namespace Restaurant.Models
{
    public class EmployeeViewModel
    {
        public int ID { get; set; }

        [Display(Name = "Position")]
        [Range(1, int.MaxValue, ErrorMessage = "Select a correct category")]
        public EmployeeFunction Function { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Start date")]
        public DateTime StartDate { get; set; }

        public decimal Salary { get; set; }

        public PersonModel PersonDetails { get; set; }
    }
    public enum EmployeeFunction
    {
        Chef = 1,
        Manager = 2,
        Waiter = 3
    }
}