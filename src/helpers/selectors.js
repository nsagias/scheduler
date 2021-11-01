export function getAppointmentsForDay(state, day) {
  let appointments = [];
  // for ( const i of state.days) {  if (i.name === name) { for (const x of i.appointments)  console.log(x) }}
  // for ( const i of state.days) {  if (i.name === name) { for (const x of i.appointments)   state.appointments[x] }}
  for ( const i of state.days) {  
    if (i.name === day) { 
      for (const x of i.appointments) {   
        appointments.push(state.appointments[x]) 
      }
    }
  }

  return appointments;
}