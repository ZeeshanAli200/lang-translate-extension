import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "../assets/tailwind.css";
const Popup = <App />;
const root = document.createElement("div");
root.className = "container";

document.body.appendChild(root);

const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(Popup);
