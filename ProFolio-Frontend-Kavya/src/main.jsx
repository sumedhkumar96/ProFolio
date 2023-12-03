import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from './pages/ErrorPage.jsx';
import { SignUpPage, action as signUpAction } from './pages/SignUpPage.jsx';
import { LoginPage, action as loginAction } from './pages/LoginPage.jsx';
import { OtpPage } from './pages/OtpPage.jsx';
import  MainContent  from './pages/MainContent.jsx';
import  Services  from './pages/Services.jsx';
import  Privacy  from './pages/Privacy.jsx';
import  Terms  from './pages/Terms.jsx';
import  ContactUs  from './pages/ContactUs.jsx';
import  UserDetails  from './pages/UserDetails.jsx';
import  Template1  from './pages/Template1.jsx';
import './styles/styles.css';

/**
 * Configuration for the application's routing structure.
 * The router is created using `createBrowserRouter` and contains
 * the route hierarchy and corresponding components to render for each path.
 *
 * - The root path ("/") uses the <Outlet /> for nested routes.
 * - The errorElement specifies the component to render in case of a route mismatch.
 * - "signup/" and "login/" are subroutes with their respective page components.
 * - "signup/verify/" is nested further under "signup/" for OTP verification.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "signup/",
        element: <Outlet />,
        action: signUpAction,
        children: [
          {
            path: "",
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            path: "verify/",
            element: <OtpPage />,
          },
        ],
      },
      {
        path: "login/",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "maincontent/",
        element: <MainContent />,
      },
      {
        path: "userdetails/",
        element: <UserDetails />,
      },
      {
        path: "services/",
        element: <Services />,
      },
      ,
      {
        path: "privacy/",
        element: <Privacy />,
      },
      {
        path: "terms/",
        element: <Terms />,
      },
      {
        path: "contactus/",
        element: <ContactUs />,
      },
      {
        path: "template1/",
        element: <Template1 />,
      }
    ],
  },
]);

/**
 * This code bootstraps the React application and mounts it to the DOM.
 * It wraps the app with React's StrictMode to catch potential issues in development mode.
 * The RouterProvider from react-router-dom provides the routing capability to the entire app.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
