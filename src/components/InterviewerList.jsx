import React from 'react';
import InterviewListItem from './InterviewerListItem';
import PropTypes from 'prop-types';
import "components/InterviewerList.scss";


// Our InterviewerList receives three props:

// interviewers:array - an array of objects as seen above
// setInterviewer:function - a function that accepts an interviewer id. This function will simply be passed down to the InterviewerListItem
// interviewer:number - a number that represents the id of the currently selected interviewer

function InterviewerList(props) {
  const {interviewers, value, onChange, id} = props;
  // const [currentInterviewer, setCurrentInterviewer] = useState(0);
  console.log('Interviewer prop', props)
  const parsedInterviewers = interviewers.map(person => 
    <InterviewListItem 
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={person.id === value}
      setInterviewer={() => onChange(person.id)}
   
    />
  
    );

  return (
  <section className="interviewers">
   <h4 className="interviewers__header text--light">Interviewer</h4>
   <ul className="interviewers__list">{parsedInterviewers}</ul>
    
  </section>
  
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;