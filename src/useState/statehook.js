/** @format */

import React, { useState } from "react";

export default function statehook() {
  //whatever is in the braces of the usestate is the initial value
  //When using hooks only call them at top level
  //do not cal hooks inside loops, conditions or nested functions
  //Never update state directly alwyas use the prevState function
  const [count, setCount] = React.useState(0);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
