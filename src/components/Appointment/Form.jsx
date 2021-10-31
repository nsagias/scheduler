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
    setInterviewer("");
  }

  console.log("form props",props)
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
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
          // value={interviewer.id}
          interviewers={interviewers}
          // <select value={this.state.value} onChange={this.handleChange}> 
          onChange={setInterviewer}
          
        />
        
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
        {/* e.target.reset(); */}
          <Button 
            danger 
            onClick={
                    onCancel, 
                    reset     
                    }>Cancel</Button>
          <Button confirm onClick={onSave} >Save</Button>
        </section>
      </section>
    </main>
  );
}