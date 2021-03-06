import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Confirm from 'components/Appointment/Confirm';
import Status from  'components/Appointment/Status';
import Error from 'components/Appointment/Error';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const {id, interview, interviewers, bookInterview, cancelInterview} = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
   
    transition(SAVING);
    bookInterview(id, interview)
      .then(()=> transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }
  
  function onDelete() {
    const interview = {
      student: null,
      interviewer: null
    };
   
    transition(CONFIRM);
  };
  
  // onConfirm is used to delele/destroy
  function onConfirm() {
    transition(DELETING, true);
    cancelInterview(id)
      .then(()=> transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  };
 
  function onCancel() {
    back();
  };

  function onEdit () {
    transition(EDIT);
  }

  function onClose() {
    back()
  }


  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && (
        <Empty onAdd={() => {transition(CREATE)}} />
      )}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={()=>onEdit()}
          onDelete={()=>onDelete()}
        />
      )}
      {mode === CREATE && (
        <Form 
          onCancel={() => {onCancel()}} 
          interviewers={interviewers}
          onSave={save}
        />
      )}
      { mode === SAVING && (
        <Status message={'Saving'}/>
      )}
      { mode === DELETING && (
        <Status message={'Deleting'}/>
      )}
      { mode === CONFIRM && (
        <Confirm 
          message={"Delete the appointment"}
          onCancel={() => {onCancel()}} 
          onConfirm={() => {onConfirm()}}
        />
      )}
      { mode === EDIT && (
        <Form 
          student={interview.student}
          // check to see if interviewer.interview before trying to insert id
          interviewer={interview.interviewer && interview.interviewer.id }
          interviewers={interviewers}
          onSave={save}
          onCancel= {() => onCancel() }
        />
      )}
      { mode === ERROR_DELETE && (
        <Error 
          message={"Could Not Delete Appointment."}
          onClose={() => onClose()}
        />
      )}
      { mode === ERROR_SAVE && (
        <Error 
         message={"Could Not Save Appointment."}
         onClose={() => onClose()}
       />
      )} 
    </article>
  );
}