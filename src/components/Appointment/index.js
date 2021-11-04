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
  const {id, item, interview, interviewers} = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  console.log(mode)
  console.log('PROPS INSIDE OF APPOINTMENTS', props)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer: interviewer
    };
    console.log('SAVE and INTERVIEW FROM APPOINTMENT INDEX', interview)
    
    // transition(SHOW);

  }
  console.log('PROPS BEFORE JSX', props)
  return (
    <article className="appointment">
     
      <Header time={props.time} />
      
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          // from storybook
          onEdit={"onEdit"}
          onDelete={"onDelete"}
        />
      )}
      {mode === CREATE && 
        <Form 
          onCancel={() => {back()}} 
          interviewers={interviewers}
          onSave={save}
          />}
      
    </article>
  );
}