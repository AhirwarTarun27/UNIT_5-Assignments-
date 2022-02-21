import { createContext, useState } from "react";
import { store } from "./../store/Store.js";

export const ReduxContext = createContext();

export const ReduxProvider = ({ children }) => {
  const [state, setState] = useState(store.getState());

  store.subscribe(() => {
    setState(store.getState());
    console.log(state);
  });
  return (
    <ReduxContext.Provider value={state}>{children}</ReduxContext.Provider>
  );
};
