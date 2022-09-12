/** @format */

import React from "react";

function IntervalEHook() {
  const someProp = "Hello";
  const [count, setCount] = React.useState(0);
  const tick = () => {
    setCount(count + 1);
  };

  /* when you want to calla function in useEffect it is best you defeinse it tin the useEffect itself
  it will also be in the dependency array
  Note : you can have mulitple useEffect */
  React.useEffect(() => {
    const interval = setInterval(tick, 1000);

    function doSomething() {
      console.log(someProp);
    }
    doSomething();
    //clean up

    return () => {
      clearInterval(interval);
    };
  }, [count, someProp]);

  return <div>{count}</div>;
}

export default IntervalEHook;
