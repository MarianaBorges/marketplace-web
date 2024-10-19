import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function AppLayout () {
  return (
    <>
      <Header></Header>
      <h1>App layout</h1>
      <Outlet />
    </>
  )
}