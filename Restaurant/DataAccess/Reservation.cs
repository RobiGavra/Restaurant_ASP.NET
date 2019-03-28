using System;

namespace Restaurant.DataAccess
{
    public class Reservation
    {
        public int ID { get; set; }

        public int CustomerID { get; set; }

        public int TableNo { get; set; }

        public int PersNo { get; set; }

        public DateTime Date { get; set; }
    }
}