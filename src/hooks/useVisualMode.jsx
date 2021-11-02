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
    const result = [...history];
    result.pop()
    return (
      setHistory(() => ([...result])),
      setMode(result[result.length -1])
    );
  };
  
  return { mode, transition, back };
}