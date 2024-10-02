import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/tailwind.css";

const Options = <h3 className="text-red-400">Option</h3>;

const root = document.createElement("div");
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(Options);
