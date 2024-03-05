import React, { useEffect } from "react";
//the useref hook access dom nodes
function start() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus on the input element using the ref hook
    //import useref
    //create a ref variable
    //call the focus method
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
}

export default start;
