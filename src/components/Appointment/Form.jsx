import React from 'react';
import { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props){
  const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // Reset fucntion used empty input and remove interviewer
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  // Combine onClick/onCancel() and Reset to execute both when clicked
  const onCancelReset= () => {
    onCancel();
    reset();
  }; 
  
  // Factored out preventDefault
  const handleSubmit = event => {
    event.preventDefault();
  };
  
  // Vallidate if input/student is empty and check if interview is falsy/empty var
  function validate() {
    // Trim() student variable to prevent empty string 
    if (student.trim() === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Please select an inteviewer");
      return;
    }
    // clear error
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
          <Button confirm onClick={() => validate()} >Save</Button>
        </section>
      </section>
    </main>
  );
}