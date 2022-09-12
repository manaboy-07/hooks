/** @format */
//the use effect is useful for api's, timer component
// ALSO UPDATING THE DOM
import React from "react";

function EffectHook() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  //the useEffect accpets a parameter which is a function excecutef when the component is render
  React.useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  //Now the dependency array of count means the effect will only run once the count state changes
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}

export default EffectHook;
