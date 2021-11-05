import { useState } from "react";


export default function useApplicationData(props) {
// const [day, setDay] = useState('Monday');
  // const [days, setDays] = useState([]);
  // const [interviewer, setInterviewer] = useState("Monday");
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  })
  
  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));
  console.log('ALL PROPS APPPPPPPP', props)
  function bookInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // setState({
    //   ...state,
    //   appointments
    // });

    // const article = { title: 'React PUT Request Example' };
    // axios.put('https://reqres.in/api/articles/1', article)
    //     .then(response => this.setState({ updatedAt: response.data.updatedAt }));
   
    
    console.log('FROM INSIDE BOOKINTERVIEW',id, interview);
   
    const PUT_ID = `http://localhost:8001/api/appointments/${id}`;
    
    return axios.put(PUT_ID, {interview})
      .then((response) => {
        setState({ ...state, appointments });
        console.log('PUT RESPONSE', response);
      }) 
      // .catch((error) => {
      //   console.log('PUT ERROR RESPONSE');
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      //   console.log(error.response.data);
      // });
  
  }

  function cancelInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // setState({
    //   ...state,
    //   appointments
    // });

    console.log('FROM INSIDE_CANCEL_INTERVIEW',id, interview);
   
    const DELETE_INTEVIEW = `http://localhost:8001/api/appointments/${id}`;
    // return axios.delete(DELETE_INTEVIEW, {interview})
    return axios.delete(DELETE_INTEVIEW, {interview})
      .then((response) => {
        setState({ ...state, appointments });
        console.log('DELETE RESPONSE', response);
      }) 
      // .catch((error) => {
      //   console.log('DELETE ERROR RESPONSE');
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      //   console.log(error.response.data);
      // });
  
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
     
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      
    })
   
  }, []);




  return { state, setDay, bookInterview, cancelInterview };
}