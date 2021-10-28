import React from 'react';
import classNames from "classnames";
import { useState } from 'react';

import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  const {id, name, avatar, selected} = props;
  const [interviewer, setInterviewer] = useState("");
  console.log('props',props)
  console.log('get selected',selected)
  // console.log('interviewer', interviewer)
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,

  });
  return (
    <li 
    className={interviewerClass}
      // className="interviewers__item"
      onClick={() => setInterviewer(id)}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name && name}
      />
      {/* check if name equal selected and then show */}
    {name && name}
   
  </li>
  );
}
