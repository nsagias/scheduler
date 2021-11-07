/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

export default function updateSpots (state, appointments, id) {
  
  
  const getNewSpots = (appointments, dayID) => {
    let count = 0;
    // loop through days and match day 
    const foundDay = state.days.find((day) => {
      return day.id === dayID;
    });
  
    // loop through specific day and count nulls for that days and return count
    foundDay.appointments.forEach(appointment => {
      const foundAppointment = appointments[appointment];
      if (foundAppointment.interview === null) {
        count += 1;
      } 
    });
    return count;
  };

  // loop through all days if specific days matches days 
  // use getNewSpots and update the object else leave the object unchange for day
  // and matp into array
  const days = state.days.map((day) => {
    const isCorrectDay = day.appointments.includes(id)
    if (isCorrectDay) {
      return { ...day, spots: getNewSpots(appointments, day.id) }
    } else {
      return day;
    }
  });
  
  // return days array
  return days;
};

