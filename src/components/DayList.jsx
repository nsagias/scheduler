import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const { days, onChange } = props; 
  const parsedDay = days.map(days => 
    <DayListItem 
      key={days.id}
      name={days.name}
      spots={days.spots} 
      selected={days.name === props.value}
      setDay={onChange}  
    /> 
  );

  return (
    <ul>
      {parsedDay}
    </ul>
  );
}