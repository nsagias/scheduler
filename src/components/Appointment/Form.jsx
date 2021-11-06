import React from 'react';
import { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props){
  const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
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

  function validate() {
    if (student === ""  ) {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Please select an inteviewer");
      return;
    }
    setError("");
    onSave(student, interviewer);
  }
  
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
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
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
          <Button confirm onClick={() => validate()} >Save</Button>

        </section>
      </section>
    </main>
  );
}