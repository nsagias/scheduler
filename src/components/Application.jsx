import React, { useState, useEffect } from "react";
import axios from 'axios';
import DayList from "./DayList";
import Appointment from "components/Appointment";
import {getAppointmentsForDay} from "helpers/selectors";


import "components/Application.scss";


// let dailyAppointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];
// const state = { day: "Monday", days: [] }; 
// setState({ ...state, day: "Tuesday" });

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
  

  useEffect(() => {
   
    const GET_DAYS =         'http://localhost:8001/api/days';
    const GET_APPOINTMENTS = 'http://localhost:8001/api/appointments';
    const GET_INTERVIEWERS = 'http://localhost:8001/api/interviewers';
   
    Promise.all([
      axios.get(GET_DAYS),
      axios.get(GET_APPOINTMENTS),
      axios.get(GET_INTERVIEWERS)
    ]).then((all) => {
      console.log('this is 0',all[0].data)
      console.log('this is 1',all[1].data)
      console.log('this is 2',all[2].data)
      // setState(prev => ({...prev, first: all[0], second: all[1], third: all[2] }));
      // const {first, second, third} = all;
      // console.log('first', first)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      
    })
   
  }, []);
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointment = dailyAppointments.map(x =>
    <Appointment
      key={x.id}
      id={x.id}
      time={x.time}
      interview={x.interview}
    />
  );
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
        {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
