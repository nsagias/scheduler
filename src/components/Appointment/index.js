import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import "components/Appointment/styles.scss"


export default function Appointment(props) {
  const {time} = props;
  return (
    <article className="appointment">
      <Header time={time} />
    </article>
  );
}