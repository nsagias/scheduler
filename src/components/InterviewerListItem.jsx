import React from 'react';
import classNames from "classnames";


import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  let {id, name, avatar, selected, setInterviewer} = props;

  function nameLogic(name) {
    if (!selected) {
      return undefined;
    }
    return name;
  };
  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,

  });
 
  return (
    <li 
      className={interviewersClass}
      // className="interviewers__item"
      onClick={() => setInterviewer(id)}
      >
      <img
        className="interviewers__item-image"
        src={avatar}
        // alt={nameLogic(name)} 
        alt={name}

      />
      {nameLogic(name)}
      {/* {name} */}
  </li>
  );
}
