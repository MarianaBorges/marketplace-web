import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./_layout/auth";
import SignIn from "./pages/sign-in";

export const router = createBrowserRouter([{
  path: '/',
  element: <AuthLayout />,
  children: [
    { path: '/sign-in', element: <SignIn /> },
  ],
  },
])