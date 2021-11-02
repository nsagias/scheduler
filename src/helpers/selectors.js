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


// expected output
// {  
//   "student": "Lydia Miller-Jones",
//   "interviewer": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }

// const interviewers = {
//   "1": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   },
//   "2": {
//     id: 2,
//     name: "Tori Malcolm",
//     avatar: "https://i.imgur.com/Nmx0Qxo.png"
//   }
// };

export function getInterview(state, interview)  {
  let result = {};

  return result;
}