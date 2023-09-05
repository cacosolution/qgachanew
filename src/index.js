import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/sideBarContext";
import { router } from "./router/index"
import store from "./redux/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SidebarProvider>
  </React.StrictMode>
);

reportWebVitals();
