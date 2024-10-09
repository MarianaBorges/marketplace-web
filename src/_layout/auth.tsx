import { Outlet } from "react-router-dom";

export default function AuthLayout () {
  return (
    <div className="relative flex h-screen overflow-y-scroll">
      <div className="p-9 bg-[url('./src/assets/Background.png')] bg-1/2 bg-no-repeat bg-center sticky top-0 bottom-0 w-3/5">
        <img src="./src/assets/Title.svg"/>
      </div>
      <div className="w-2/5 p-6 flex">
        <Outlet />
      </div>
    </div>
  )
}