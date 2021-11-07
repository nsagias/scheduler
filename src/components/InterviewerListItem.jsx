import React from 'react';
import classNames from "classnames";
import "components/InterviewListItem.scss"

export default function InterviewListItem(props){
  const {id, name, avatar, selected, setInterviewer} = props;

  // logic to display or return undefined if selected is falsy
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
      onClick={() => setInterviewer(id)}
    > 
    <img
      className="interviewers__item-image"
      src={avatar}
      alt={name}
    />
    {nameLogic(name)}
  </li>
  );
}
