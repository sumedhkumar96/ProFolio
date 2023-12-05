import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from './pages/ErrorPage.jsx';
import { SignUpPage, action as signUpAction } from './pages/SignUpPage.jsx';
import { LoginPage, loader as loginLoader, action as loginAction } from './pages/LoginPage.jsx';
import { OtpPage } from './pages/OtpPage.jsx';
import './styles/styles.css';
import { loader as portfolioLoader, PortfolioPage } from './pages/PortfolioPage.jsx';
import { AuthChecker } from './components/AuthChecker.jsx';

const router = createHashRouter([
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
  {
    path: "/user/:id",
    element: <PortfolioPage />,
    loader:portfolioLoader,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
