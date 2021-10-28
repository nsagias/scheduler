import React from 'react';
import InterviewListItem from './InterviewListItem';
import "components/InterviewerList.scss";

// const interviewers = [
//   { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
//   { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
//   { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
//   { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
//   { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
// ];

// Our InterviewerList receives three props:

// interviewers:array - an array of objects as seen above
// setInterviewer:function - a function that accepts an interviewer id. This function will simply be passed down to the InterviewerListItem
// interviewer:number - a number that represents the id of the currently selected interviewer

export default function InterviewerList(props) {
  const {interviewers, setInterviewer} = props;
  // console.log(props.setInterviewer)
  const parsedInterviewers = interviewers.map(person => 
    <InterviewListItem 
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      setInterviewer={person.id}
    />
  
    );

  return (
  <section className="interviewers">
   <h4 className="interviewers__header text--light">Interviewer</h4>
   <ul className="interviewers__list">{parsedInterviewers}</ul>
    
  </section>
  
  );
}