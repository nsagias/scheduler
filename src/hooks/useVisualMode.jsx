import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // console.log('state', mode)
  // console.log(history)


  const transition = (mode, replace = false) => {
    const result = [...history];
    if (replace === true) {
    result.pop()
    }
    setMode(() => (mode));
    setHistory(() => ([...result, mode]));

  };

  const back = () => {
    const result = [...history];
    if (result.length > 1) {
      result.pop();
    }
    setHistory(() => ([...result]));
    setMode(() => (result[result.length - 1]));

  };

  return { mode, transition, back };
}