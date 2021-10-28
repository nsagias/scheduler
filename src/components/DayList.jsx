import React from 'react';
import DayListItem from './DayListItem';
//   Our <DayList> component will take in three props.

// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday

export default function DayList(props) {
  const { days, setDay } = props; 
  console.log(days)
  const parsedDay = days.map(days => <DayListItem key={days.id}{...days}  setDay />);
  return (
  <ul>
    {parsedDay}
  </ul>
  );
}