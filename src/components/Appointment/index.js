import React from 'react';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss"


export default function Appointment(props) {
 const {id, item, interview} = props;
  // console.log(props.interview.interviewer)
  // const {interviewer} = interview;
  // console.log('interviewID:', interviewer.id)
  // console.log('interviewID:', interviewer.name)
  // console.log(props)
  return (
    <article className="appointment">
     
      <Header time={props.time} />
  
        {!interview ? <Empty /> : <Show 
          student={interview.student}
          interviewer={interview.interviewer}
        /> }
      

    </article>
  );
}