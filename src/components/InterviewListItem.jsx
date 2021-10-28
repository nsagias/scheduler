import React from 'react';
import classNames from "classnames";
import { useState } from 'react';

import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  const {id, name, avatar, selected} = props;
  const [interviewer, setInterviewer] = useState("");
  // console.log(props)
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,

  });
  return (
    <li 
    className={interviewerClass}
      // className="interviewers__item"
      onClick={() => props.setInterviewer(id)}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={props.name && name}
      />
    {props.name && name}
   
  </li>
  );
}
