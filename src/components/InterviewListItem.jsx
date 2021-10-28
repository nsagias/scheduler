import React from 'react';
import { useState } from 'react';

import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  const {id, name, avatar} = props;
  const [interview, setInterviewer] = useState("Sylvia Palmer");
  
  return (
    <li 
    className="interviewers__item"
    onClick={() => setInterviewer(id)}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
    {name}
  </li>
  );
}
