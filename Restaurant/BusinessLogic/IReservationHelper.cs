using Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.BusinessLogic
{
    public interface IReservationHelper
    {
        List<ReservationViewModel> GetReservarion();

        ReservationViewModel GetReservationDetails(int id);

        void CreateReservation(ReservationViewModel newRecord);

        void UpdateReservation(ReservationViewModel record);

        void DeleteReservation(int id);
    }
}
