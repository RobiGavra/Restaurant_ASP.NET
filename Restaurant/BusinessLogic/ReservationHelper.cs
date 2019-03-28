using Restaurant.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Restaurant.BusinessLogic
{
    public class ReservationHelper : IReservationHelper
    {
        private DataAccess.RestaurantDBContext dbContext = new DataAccess.RestaurantDBContext();

        public List<ReservationViewModel> GetReservarion()
        {
            List<ReservationViewModel> reservationVM = new List<ReservationViewModel>();

            foreach (DataAccess.Reservation reservation in dbContext.Reservations.ToList())
                reservationVM.Add(MapModel(reservation));

            return reservationVM;
        }

        public ReservationViewModel GetReservationDetails(int id)
        {
            DataAccess.Reservation reservation = dbContext.Reservations.Find(id);

            if (reservation == null)
                return null;

            return MapModel(reservation);
        }

        public void CreateReservation(ReservationViewModel newRecord)
        {
            DataAccess.Person newCustomer = MapModel(newRecord);

            dbContext.Persons.Add(newCustomer);
            dbContext.SaveChanges();

            dbContext.Reservations.Add(MapModel(newRecord, newCustomer.ID));
            dbContext.SaveChanges();
        }

        public void UpdateReservation(ReservationViewModel record)
        {
            DataAccess.Person modifiedCustomer = MapModel(record);
            modifiedCustomer.ID = record.CustomerDetails.ID;

            dbContext.Entry(modifiedCustomer).State = EntityState.Modified;
            dbContext.SaveChanges();

            DataAccess.Reservation modifiedRecord = MapModel(record, modifiedCustomer.ID);
            modifiedRecord.ID = record.ID;

            dbContext.Entry(modifiedRecord).State = EntityState.Modified;
            dbContext.SaveChanges();
        }

        public void DeleteReservation(int id)
        {
            DataAccess.Reservation reservation = dbContext.Reservations.Find(id);
            DataAccess.Person customer = dbContext.Persons.Find(reservation.CustomerID);

            dbContext.Reservations.Remove(reservation);
            dbContext.Persons.Remove(customer);

            dbContext.SaveChanges();
        }

        private ReservationViewModel MapModel(DataAccess.Reservation reservation)
        {
            DataAccess.Person customer = dbContext.Persons.Find(reservation.CustomerID);

            ReservationViewModel customerVM = new ReservationViewModel
            {
                ID = reservation.ID,
                Date = reservation.Date,
                PersNo = reservation.PersNo,
                TableNo = reservation.TableNo,
                CustomerDetails = new PersonModel
                {
                    ID = customer.ID,
                    FirstName = customer.FirstName,
                    LastName = customer.LastName,
                    PhoneNumber = customer.PhoneNumber,
                    Email = customer.Email
                }
            };

            return customerVM;
        }

        private DataAccess.Person MapModel(ReservationViewModel newItem)
        {
            DataAccess.Person newCustomer = new DataAccess.Person
            {
                FirstName = newItem.CustomerDetails.FirstName,
                LastName = newItem.CustomerDetails.LastName,
                Email = newItem.CustomerDetails.Email,
                PhoneNumber = newItem.CustomerDetails.PhoneNumber
            };

            return newCustomer;
        }

        private DataAccess.Reservation MapModel(ReservationViewModel newItem, int customerID)
        {
            DataAccess.Reservation newReservation = new DataAccess.Reservation
            {
                CustomerID = customerID,
                Date = newItem.Date,
                TableNo = newItem.TableNo,
                PersNo = newItem.PersNo
            };

            return newReservation;
        }
    }
}