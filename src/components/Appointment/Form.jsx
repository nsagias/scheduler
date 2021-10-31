import React from 'react';
import { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props){
  const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
// The Form component should track the following state:

// student:String
// interviewer:Number
// The Form component should have the following actions:

// setStudent:Function
// setInterviewer:Function
// The Form component should take the following props:

// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function
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
            onChange={(event) => onSave(event.target.value)}
          />
        </form>
        <InterviewerList
          value={interviewer}
          // value={interviewer.id}
          interviewers={interviewers}
          // setInterviewer={() => onChange(person.id)}
          
        />
        
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          {/* setInterviewer={() => onSave(interviewer)} */}
          <Button confirm onClick={onSave} >Save</Button>
        </section>
      </section>
    </main>
  );
}