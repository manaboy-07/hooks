/** @format */

import "./App.css";
import DataFetching from "../src/useEffect/DataFetching";
import EffectHookMouse from "../src/useEffect/EffectHookMouse";
import EffectHookMouseCon from "../src/useEffectEffectHookMouseCon";
import IntervalEHook from "../src/useEffect/IntervalEHook";
import EffectHook from "../src/useEffect/EffectHook";
import ComponentC from "./useContext/ComponentC";
import React from "react";

export const UserContext = React.createContext();

function App() {
  return (
    <div className='App'>
      {/* <EffectHook /> */}
      {/* <EffectHookMouse /> */}
      {/* <EffectHookMouseCon /> */}
      {/* <IntervalEHook /> */}
      <DataFetching />
      <UserContext.Provider value={"Manasseh is learning context"}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
