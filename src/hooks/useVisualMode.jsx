import { useState } from "react";

// Function is used to manage visual modes used setHistory[] 
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transition moves to new visual mode and updates history
  const transition = (mode, replace = false) => {
    const result = [...history];
    if (replace === true) {
      result.pop();
    }
    setMode(() => (mode));
    setHistory(() => ([...result, mode]));
  };
  
  // Back moves to previous history and update mode back one 
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