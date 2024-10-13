import { Outlet } from "react-router-dom";

export default function AppLayout () {
  return (
    <>
      <h1>App layout</h1>
      <Outlet />
    </>
  )
}