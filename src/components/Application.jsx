import React, { useState, useEffect } from "react";
import axios from 'axios';
import DayList from "./DayList";
import Appointment from "components/Appointment";
import {
  getAppointmentsForDay, 
  getInterview,
  getInterviewersForDay
} from "helpers/selectors";
import "components/Application.scss";


export default function Application(props) {
  // const [day, setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
  // const [interviewer, setInterviewer] = useState("Monday");
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {},
  })
  // console.log('thisis state',state)
  // const dailyAppointments = [];
  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));
  

  function bookInterview(id, interview) {
    console.log(id, interview);
    // const appointment = {
    //   ...state.appointments[id],
    //   interview: { ...interview }
    // };
  }
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  }


  useEffect(() => {
   
    const GET_DAYS =         'http://localhost:8001/api/days';
    const GET_APPOINTMENTS = 'http://localhost:8001/api/appointments';
    const GET_INTERVIEWERS = 'http://localhost:8001/api/interviewers';
   
    Promise.all([
      axios.get(GET_DAYS),
      axios.get(GET_APPOINTMENTS),
      axios.get(GET_INTERVIEWERS)
    ]).then((all) => {
      // console.log('this is 0',all[0].data)
      // console.log('this is 1',all[1].data)
      // console.log('this is 2',all[2].data)
      // setState(prev => ({...prev, first: all[0], second: all[1], third: all[2] }));
      // const {first, second, third} = all;
      // console.log('first', first)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      
    })
   
  }, []);
  
const appointments = getAppointmentsForDay(state, state.day);
console.log(appointments)
const interviewers = getInterviewersForDay(state, state.day);
console.log('this is interviewers',interviewers)

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interviewers}
      bookInterview={bookInterview}
    />
  );
});
  return (
    <main className="layout">
      <section className="sidebar">
      <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
              days={state.days}
              value={state.day}
              onChange={setDay}
          
            />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
