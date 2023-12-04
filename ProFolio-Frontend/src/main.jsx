import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from './pages/ErrorPage.jsx';
import { SignUpPage, action as signUpAction } from './pages/SignUpPage.jsx';
import { LoginPage, loader as loginLoader, action as loginAction } from './pages/LoginPage.jsx';
import { OtpPage } from './pages/OtpPage.jsx';
import './styles/styles.css';
import { AuthChecker } from './pages/AuthChecker.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AuthChecker />,
      },
      {
        path: "signup/",
        element: <Outlet />,
        action: signUpAction,
        children: [
          {
            path: "",
            element: <SignUpPage />,
            loader:loginLoader,
            action: signUpAction,
          },
          {
            path: "verify/:id",
            element: <OtpPage />,
          },
        ],
      },
      {
        path: "login/",
        element: <LoginPage />,
        loader:loginLoader,
        action: loginAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
