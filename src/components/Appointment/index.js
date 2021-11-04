import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";


export default function Appointment(props) {
  const {id, item, interview, interviewers, bookInterview, cancelInterview} = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  console.log(mode)
  console.log('PROPS INSIDE OF APPOINTMENTS', props)

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    console.log('SAVE and INTERVIEW FROM APPOINTMENT INDEX', interview)
    transition(SAVING);
    bookInterview(id, interview);
    transition(SHOW);

  }

  function onDelete(name, interviewer) {
    const interview = {
      student: null,
      interviewer: null
    };
    console.log('DELETE and INTERVIEW FROM APPOINTMENT INDEX', interview)
    transition(DELETING);
    // ADD CONFIRM LOGIC HERE
    cancelInterview(id, interview);
    transition(EMPTY);

  };

  // W07D5 
  function onConfirm() {
    transition(DELETING);
  };

  function onCancel() {
    back();
  };

  function onEdit () {
    transition(EDIT);
  }

  function onComplete() {
    transition(SHOW);
  };
  


  console.log('PROPS BEFORE JSX', props)
  return (
    <article className="appointment">
     
      <Header time={props.time} />
      
      {mode === EMPTY && 
        <Empty onAdd={() => {transition(CREATE)}} />}
      
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          // from storybook
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      {mode === CREATE && 
        <Form 
          onCancel={() => {onCancel}} 
          interviewers={interviewers}
          onSave={save}
        />}


       { mode === SAVING && 
       <Status message={'Saving'}/>}

       { mode === DELETING && 
       <Status message={'Deleting'}/>}


       { mode === CONFIRM && 
       <CONFIRM 
          message={"Delete the appointment"}
          onCancel={onCancel}
          onConfirm={onConfirm}
       />}
      
    </article>
  );
}