import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import UserStorage from "./UserStorage";
import WindowSize from "./WindowSize";
import CounterStatevsRef from "./CounterStatevsRef";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterStatevsRef />
  </StrictMode>
);
