/** @format */

import React from "react";
import EffectHookMouse from "./EffectHookMouse";

function EffectHookMouseCon() {
  const [display, setDisplay] = React.useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <EffectHookMouse />}
    </div>
  );
}

export default EffectHookMouseCon;
