/** @format */

import React from "react";
import ComponentE from "./ComponentE";
// the use context provides a way to pass data through the component tree without
//passing down props manually at every level
// 3 steps are invloved
// 1 create the context
// 2. provide it with a value and wrap around the children
//3 . consume the context value
// check app.js
function ComponentC() {
  return (
    <div>
      <ComponentE />
    </div>
  );
}

export default ComponentC;
