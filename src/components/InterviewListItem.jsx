import React from 'react';
import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  const {id, name, avatar} = props;
  
  return (
    <li 
    className="interviewers__item"
    onClick={() => console.log('clicked')}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt="Sylvia Palmer"
      />
    {name}
  </li>
  );
}
