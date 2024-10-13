import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./_layout/auth";
import SignIn from "./pages/auth/sign-in";
import AppLayout from "./_layout/app";
import { Dashboard } from "./pages/app/dashboard";

export const router = createBrowserRouter([{
  path: '/',
  element: <AuthLayout />,
  children: [
    { path: '/sign-in', element: <SignIn /> },
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