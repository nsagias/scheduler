import React from 'react';
import InterviewListItem from './InterviewerListItem';
import "components/InterviewerList.scss";


export default function InterviewerList(props) {
  const {interviewers, value, onChange, id} = props;
  // const [currentInterviewer, setCurrentInterviewer] = useState(0);
  console.log('InterviewListItem PROPS', props)
  
  const parsedInterviewers = interviewers.map(person => 
    <InterviewListItem 
      key={person.id}
      name={person.name}
      avatar={person.avatar}
      selected={person.id === props.value}
      setInterviewer={() => onChange(person.id)}
   
    />
      );
    // id: 3,
    //         name: "Sylvia Palmer",
    //         avatar: "https://i.imgur.com/LpaY82x.png",
    // const parsedInterviewers = 
    // <InterviewListItem 
    //   key={3}
    //   name={"Sylvia Palmer"}
    //   avatar={"https://i.imgur.com/LpaY82x.png"}
    //   selected={3 === value}
    //   setInterviewer={() => onChange(3)}
   
    // />

  return (
    <section className="interviewers">
     <h4 className="interviewers__header text--light">Interviewer</h4>
     <ul className="interviewers__list">{parsedInterviewers}</ul>
      
    </section>
    
    );
  }
  
  // InterviewerList.propTypes = {
  //   interviewers: PropTypes.array.isRequired
  // };
