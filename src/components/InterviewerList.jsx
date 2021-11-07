import React from 'react';
import PropTypes from 'prop-types';
import InterviewListItem from './InterviewerListItem';
import "components/InterviewerList.scss";


export default function InterviewerList(props) {
  const {interviewers,onChange} = props;

  const parsedInterviewers = interviewers.map(person => 
    <InterviewListItem 
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={person.id === props.value}
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
