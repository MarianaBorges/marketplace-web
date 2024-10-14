import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./_layout/auth";
import AppLayout from "./_layout/app";
import { Dashboard } from "./pages/app/dashboard";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";

export const router = createBrowserRouter([{
  path: '/',
  element: <AuthLayout />,
  children: [
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
  ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
])