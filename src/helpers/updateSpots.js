export default function updateSpots (state, appointments, id) {

  const getNewSpots = (appointments, dayID) => {
    let count = 0;
    const foundDay = state.days.find((day) => {
      return day.id === dayID;
    });

    foundDay.appointments.forEach(appointment => {
      const foundAppointment = appointments[appointment];
      if (foundAppointment.interview === null) {
        count += 1;
      } 
    });
    return count;
  };

  const days = state.days.map((day) => {
    const isCorrectDay = day.appointments.includes(id)
    if (isCorrectDay) {
      return { ...day, spots: getNewSpots(appointments, day.id) }
    } else {
      return day;
    }
  });

  return days;
};

