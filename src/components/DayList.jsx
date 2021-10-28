import React from 'react';
import DayListItem from './DayListItem';
//   Our <DayList> component will take in three props.

// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday

export default function DayList(props) {
  const { days, setDay } = props; 
  const parsedDay = days.map(days => 
  <DayListItem 
    key={days.id}
    name={days.name}
    spots={days.spots} 
    selected={days.name === props.day}
    setDay={setDay}  
  /> 
  );
  return (
    <ul>
      {parsedDay}
    </ul>
  );
}