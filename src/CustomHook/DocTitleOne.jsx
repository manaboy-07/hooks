import React, { useEffect, useState } from "react";
import useDocTitle from "./useDocTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);
  useDocTitle(count); // custom hook that updates document title
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default DocTitleOne;
