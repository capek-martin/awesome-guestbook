import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./utils/app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
