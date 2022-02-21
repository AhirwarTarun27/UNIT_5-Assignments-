import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ReduxProvider } from "./context/ReduxContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </StrictMode>,
  rootElement
);
