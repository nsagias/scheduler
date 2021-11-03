import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const {id, item, interview} = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  console.log(mode)

  console.log(props)
  return (
    <article className="appointment">
     
      <Header time={props.time} />
      
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === CREATE && 
        <Form onCancel={() => {back()}} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          interviewer={interview.interviewer}
        />
      )}
      
    </article>
  );
}