import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log('state', mode)
  console.log(history)
  
  
  const transition = mode => {
    return (
      setMode(mode),
      setHistory([...history, mode])
    );
  };
  
  const back = () => {
    let result = [...history];
    if (result.length > 1) {
      result.pop();
    } 
    setHistory(() => ([...result])),
    setMode(result[result.length -1])
    
  };
  
  return { mode, transition, back };
}