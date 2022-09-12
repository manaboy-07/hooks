/** @format */

import React from "react";
//calling effects only once by passing an empty array
function EffectHookMouse() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  React.useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //clean up function
    // when you want to excecute a component return in that function
    return () => {
      console.log("Componetn un mounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} and Y - {y}
    </div>
  );
}

export default EffectHookMouse;
