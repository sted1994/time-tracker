import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { CreateAccountForm } from "./components/createAccountForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>World, Hello!!</div>,
    },
    {
      path: "create-account",
      element: <CreateAccountForm />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
