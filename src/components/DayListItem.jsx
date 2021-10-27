import React from 'react';
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  const {selected, spots, name} = props;

  // const dayClass = classNames('li', {
  //   "day-list__item": true,
  //   "--selected": selected,
  //   "--full": spots,
  // });
  const dayClass = classNames("day-list__item", {
    // "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  return (
    <li className={dayClass} 
       onClick={() => props.setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
}