import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  //does not call re-render

  return (
    <div>
      <h2>HookTimer - {timer}</h2>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Interval
      </button>
    </div>
  );
}

export default HookTimer;
