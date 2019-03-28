using System;
using System.ComponentModel.DataAnnotations;

namespace Restaurant.Models
{
    public class ReservationViewModel
    {
        public int ID { get; set; }
       
        public DateTime Date { get; set; }

        [Display(Name = "Table number")]
        public int TableNo { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Select a correct number")]
        [Display(Name = "Number of persons")]
        public int PersNo { get; set; }

        public PersonModel CustomerDetails { get; set; }
    }
}