/** @format */

import React from "react";

function StateHookObj() {
  const [name, setName] = React.useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type='text'
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default StateHookObj;
