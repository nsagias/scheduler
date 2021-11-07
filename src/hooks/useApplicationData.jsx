import { useState, useEffect } from "react";
import updateSpots from "helpers/updateSpots";
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  })

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    const PUT_ID = `http://localhost:8001/api/appointments/${id}`;
    return axios.put(PUT_ID, { interview })
      .then((response) => {
        const days = updateSpots(state, appointments, id);
        setState({ ...state, appointments, days });
      });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
   

  const DELETE_INTEVIEW = `http://localhost:8001/api/appointments/${id}`;
  return axios.delete(DELETE_INTEVIEW, { interview })
    .then((response) => {
      const days = updateSpots(state, appointments, id);
      setState({ ...state, appointments, days});
    });
  };

  useEffect(() => {
    const GET_DAYS = 'http://localhost:8001/api/days';
    const GET_APPOINTMENTS = 'http://localhost:8001/api/appointments';
    const GET_INTERVIEWERS = 'http://localhost:8001/api/interviewers';

    Promise.all([
      axios.get(GET_DAYS),
      axios.get(GET_APPOINTMENTS),
      axios.get(GET_INTERVIEWERS)
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })

  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}