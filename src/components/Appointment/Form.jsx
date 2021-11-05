import React from 'react';
import { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props){
  const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  // create reset function
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };
  // combine onCancel and reset to execute both
  const onCancelReset= () => {
    onCancel();
    reset();
  }; 
  
  
  const handleSubmit = event => {
    event.preventDefault();
  };
  console.log("FORM PROPS", props)
  console.log('STUDENT',student)
  console.log('INTERVIEWER', interviewer)
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          value={interviewer}
          interviewers={interviewers}
          onChange={setInterviewer}
          
        />
        
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancelReset}>Cancel</Button>
          {/* <Button confirm onClick={onSave(interviewer)} >Save</Button> */}
          <Button confirm onClick={() => onSave( student, interviewer )} >Save</Button>
          {/* <Button confirm onClick={() => onSave( {student: student, interviewer:interviewer} )} >Save</Button> */}

          {/* <Button confirm onClick={() => console.log({student: student, interviewer:interviewer})} >Save</Button> */}
     
        </section>
      </section>
    </main>
  );
}