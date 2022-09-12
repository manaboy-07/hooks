/** @format */

import "./App.css";
import DataFetching from "../src/useEffect/DataFetching";
import EffectHookMouse from "../src/useEffect/EffectHookMouse";
import EffectHookMouseCon from "../src/useEffect/EffectHookMouseCon";
import IntervalEHook from "../src/useEffect/IntervalEHook";
import EffectHook from "../src/useEffect/EffectHook";
import ComponentC from "./useContext/ComponentC";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// we can provie mulyiple context value by adding the provider at each context lebvel
function App() {
  return (
    <div className='App'>
      {/* <EffectHook /> */}
      {/* <EffectHookMouse /> */}
      {/* <EffectHookMouseCon /> */}
      {/* <IntervalEHook /> */}
      <DataFetching />
      <UserContext.Provider value={"Manasseh is learning context"}>
        <ChannelContext.Provider value={"Mana_Boy"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
