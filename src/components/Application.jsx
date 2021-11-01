import React, { useState, useEffect } from "react";
import axios from 'axios';
import DayList from "./DayList";
import Appointment from "components/Appointment";


import "components/Application.scss";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];

export default function Application(props) {
//   "GET_DAYS":         http://localhost:8001/api/days
// "GET_APPOINTMENTS": http://localhost:8001/api/appointments
// "GET_INTERVIEWERS": http://localhost:8001/api/interviewers
  const [day, setDay] = useState('Monday');
  const [days, setDays] = useState([]);
  const [interviewer, setInterviewer] = useState("Monday");

  useEffect(() => {
    const endpoint = 'http://localhost:8001/api/days';
    axios.get(endpoint).then(response => {
      setDays(response.data)
      console.log('here',Array.isArray(response.data));
      // console.log('here',...response.data);
      // console.log(response.data.id);
      // console.log(response.data.name);
    });
  }, [days]);
  
  const appointment = appointments.map(x =>
    <Appointment
      id={x.id}
      time={x.time}
      interview={x.interview}
    />
  )
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
              days={days}
              value={day}
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
