import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from './pages/ErrorPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import './styles/styles.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup/",
        element: <SignUpPage />,
        children:[
          {
            path: "verify/",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "login/",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
