import React, { useState, useEffect } from "react";
import useApplicationData from "hooks/useApplicationData";
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
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  // // const [day, setDay] = useState('Monday');
  // // const [days, setDays] = useState([]);
  // // const [interviewer, setInterviewer] = useState("Monday");
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {},
  // })
  
  // const setDay = day => setState({ ...state, day });
  // // const setDays = days => setState(prev => ({ ...prev, days }));
  // console.log('ALL PROPS APPPPPPPP', props)
  // function bookInterview(id, interview) {
    
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  //   // setState({
  //   //   ...state,
  //   //   appointments
  //   // });

  //   // const article = { title: 'React PUT Request Example' };
  //   // axios.put('https://reqres.in/api/articles/1', article)
  //   //     .then(response => this.setState({ updatedAt: response.data.updatedAt }));
   
    
  //   console.log('FROM INSIDE BOOKINTERVIEW',id, interview);
   
  //   const PUT_ID = `http://localhost:8001/api/appointments/${id}`;
    
  //   return axios.put(PUT_ID, {interview})
  //     .then((response) => {
  //       setState({ ...state, appointments });
  //       console.log('PUT RESPONSE', response);
  //     }) 
  //     // .catch((error) => {
  //     //   console.log('PUT ERROR RESPONSE');
  //     //   console.log(error.response.status);
  //     //   console.log(error.response.headers);
  //     //   console.log(error.response.data);
  //     // });
  
  // }

  // function cancelInterview(id, interview) {
    
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  //   // setState({
  //   //   ...state,
  //   //   appointments
  //   // });

  //   console.log('FROM INSIDE_CANCEL_INTERVIEW',id, interview);
   
  //   const DELETE_INTEVIEW = `http://localhost:8001/api/appointments/${id}`;
  //   // return axios.delete(DELETE_INTEVIEW, {interview})
  //   return axios.delete(DELETE_INTEVIEW, {interview})
  //     .then((response) => {
  //       setState({ ...state, appointments });
  //       console.log('DELETE RESPONSE', response);
  //     }) 
  //     // .catch((error) => {
  //     //   console.log('DELETE ERROR RESPONSE');
  //     //   console.log(error.response.status);
  //     //   console.log(error.response.headers);
  //     //   console.log(error.response.data);
  //     // });
  
  // }



  // useEffect(() => {
   
  //   const GET_DAYS =         'http://localhost:8001/api/days';
  //   const GET_APPOINTMENTS = 'http://localhost:8001/api/appointments';
  //   const GET_INTERVIEWERS = 'http://localhost:8001/api/interviewers';
   
  //   Promise.all([
  //     axios.get(GET_DAYS),
  //     axios.get(GET_APPOINTMENTS),
  //     axios.get(GET_INTERVIEWERS)
  //   ]).then((all) => {
     
  //     setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      
  //   })
   
  // }, []);
  
const appointments = getAppointmentsForDay(state, state.day);
const interviewers = getInterviewersForDay(state, state.day);


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
      cancelInterview ={cancelInterview}
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
