import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ResultContextProvider } from "./context/ResultContextProvider";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <RouterProvider router={router} />
    </ResultContextProvider>
  </React.StrictMode>
);
