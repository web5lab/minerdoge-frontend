import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import { Provider } from "react-redux";
import store from "./App/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <Provider store={store}>
      <App />
      <Toaster position="right-top" />
    </Provider>

);
