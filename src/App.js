/** @format */

import "./App.css";
import DataFetching from "../src/useEffect/DataFetching";
import EffectHookMouse from "../src/useEffect/EffectHookMouse";
import EffectHookMouseCon from "../src/useEffectEffectHookMouseCon";
import IntervalEHook from "../src/useEffect/IntervalEHook";
import EffectHook from "../src/useEffect/EffectHook";

function App() {
  return (
    <div className='App'>
      {/* <EffectHook /> */}
      {/* <EffectHookMouse /> */}
      {/* <EffectHookMouseCon /> */}
      {/* <IntervalEHook /> */}
      <DataFetching />
    </div>
  );
}

export default App;
