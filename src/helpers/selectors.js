/**
 * Function to  get appoment out of state/data
 * @param {Object} state 
 * @param {String} day 
 * @returns {Array}array of appointments for for day
 */
export function getAppointmentsForDay(state, day) {
  let appointments = [];
  // if appointments are empty return empty array
  if (state.days.length === 0) {
    return appointments;
  }
  
  // loop over days and if the day matches 
  // loop over that days appoinment and push onto appointment array
  for ( const i of state.days) {  
    if (i.name === day) { 
      for (const x of i.appointments) {   
        appointments.push(state.appointments[x]) 
      }
    }
  }
  // return array of appoints if there are values
  return appointments;
}

/**
 * Function to single interviewer
 * @param {Object} state 
 * @param {Number} interview 
 * @returns {Object} key value pair { student : student, inteviwer: interviwer }
 */

export function getInterview(state, interview ){
  let result = {};
  // if interview is null return empty object
  if (interview ===  null) {
    return null;
  }
  // create key/value pair object
  result['student'] = interview['student']
  result['interviewer'] = state.interviewers[interview.interviewer];
  
  // return key value pair object
  return result;
};

/**
 * get interviewers for day
 * @param {Object} state 
 * @param {String} day 
 * @returns {Array}array of inteviwers for day
 */
export function getInterviewersForDay(state, day) {
  let interviewers = [];
  // check to see if interviwers on day, return empty array if none
  if (state.days.length === 0) {
    return interviewers;
  };
 
  // loop through days and check for specific day
  // they loop thorugh each interview and append to array
  for ( const i of state.days) {  
    if (i.name === day) { 
      for (const x of i.interviewers) {   
        interviewers.push(state.interviewers[x]) 
      }
    }
  };

  // return array of interviewers
  return interviewers;
}