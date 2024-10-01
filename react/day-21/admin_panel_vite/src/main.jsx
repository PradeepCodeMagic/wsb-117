import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCourse from "./AddCourse";
import ViewCourse from "./ViewCourse";
import App from "./App";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      
      {
        path: "/addcourse",
        element: <AddCourse/>,
      }
      ,
      {
        path: "/viewcourse",
        element: <ViewCourse/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);