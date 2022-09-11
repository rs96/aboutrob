import React from "react";
import { isMobile } from "../../queries";
import "./app.css";
import { DesktopApp } from "./desktop";
import { MobileApp } from "./mobile";

const App = () => (
  <div className="app">{isMobile() ? <MobileApp /> : <DesktopApp />}</div>
);

export default App;
