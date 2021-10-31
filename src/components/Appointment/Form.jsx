import React from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props){
  const {student, interviewer, interviewers, onSave, onCancel, id } = props;
  // const parsedInterviewers = interviewers.map(person => 
  //   <InterviewListItem 
  //     key={person.id}
  //     name={person.name}
  //     avatar={person.avatar}
  //     // selected={person.id === value}
  //     // setInterviewer={() => onChange(person.id)}
   
  //   /> );
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
            key={id} 
            placeholder="Enter Student Name"
            onChange={(event) => onSave(event.target.value)}
          />
        </form>
        <InterviewerList
          value={interviewer}
          interviewers={interviewers}
          
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