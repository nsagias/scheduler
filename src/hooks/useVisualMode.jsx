import { useState } from "react";



export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  console.log('state', mode)
  
  
  const transition = mode => setMode(mode);

  return { mode, transition };
}