import "./styles.css";
import { useContext } from "react";

import { store } from "./store/Store.js";
import { incCount } from "./store/actions.js";
import { ReduxContext } from "././context/ReduxContext";

export default function App() {
  const { count } = useContext(ReduxContext);
  return (
    <div className="App">
      <h3>Counter: {count}</h3>
      <button
        onClick={() => {
          store.dispatch(incCount(1));
        }}
      >
        Add
      </button>
    </div>
  );
}
