export function getAppointmentsForDay(state, day) {
  let appointments = [];
  if (state.days.length === 0) {
    return appointments;
  }
  
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
  let result = {};
  if (interview ===  null) {
    return null;
  }

  result['student'] = interview['student']
  result['interviewer'] = state.interviewers[interview.interviewer];
  
  return result;
};

export function getInterviewersForDay(state, day) {
  let interviewers = [];
  if (state.days.length === 0) {
    return interviewers;
  };
 
  for ( const i of state.days) {  
    if (i.name === day) { 
      for (const x of i.interviewers) {   
        interviewers.push(state.interviewers[x]) 
      }
    }
  };

  return interviewers;
}