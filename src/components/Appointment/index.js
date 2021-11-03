import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  const {id, item, interview} = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  console.log(props)
  return (
    <article className="appointment">
     
      <Header time={props.time} />
  
      {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      

    </article>
  );
}