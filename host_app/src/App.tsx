import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Calculator = React.lazy(() => import("app1/Calculator" as any));

const App = () => (
  <div className="container">
    <h1>Host_app</h1>
    <Calculator />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
