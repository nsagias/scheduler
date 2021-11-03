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


export function getInterview(state, interview ){
  let result = {}
  if (interview ===  null) {
    return null;
  }
// for (const i in state.appointments) { 
//   result['student'] = state.appointments[3].interview['student']
//   result['interviewer'] =interviewers[state.appointments[3].interview['interviewer']]
// }

  result['student'] = interview['student']
  result['interviewer'] = state.interviewers[interview.interviewer];
  
// console.log('get interview',interview.interviewer)
// console.log('student', interview.student)
// console.log('all the interviews',state.interviewers[interview.interviewer])
return result;
};