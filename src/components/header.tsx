import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { FaUserLarge } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";


export default function Header () {
  return (
    <div className="flex justify-between p-3">
      <div>
        <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3110_3205)">
            <path d="M33.0956 39.3113C34.0086 40.2296 35.4958 40.2296 36.4088 39.3113L53.9764 21.6422C54.8801 20.7333 54.8801 19.2667 53.9764 18.3578L36.4088 0.688674C35.4958 -0.229562 34.0086 -0.229558 33.0956 0.688683L28.041 5.77255C32.742 8.77153 35.8582 14.023 35.8582 20.0002C35.8582 25.9773 32.7421 31.2287 28.0413 34.2277L33.0956 39.3113Z" fill="#5EC5FD"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.041 5.75235L16.6995 17.1596C15.1482 18.7198 15.1482 21.2398 16.6995 22.8001L28.0413 34.2075C25.4107 35.8858 22.2839 36.8586 18.9291 36.8586C9.57943 36.8586 2 29.3018 2 19.98C2 10.6582 9.57943 3.10139 18.9291 3.10139C22.2838 3.10139 25.4105 4.07422 28.041 5.75235Z" fill="#F24D0D"/>
          </g>
          <defs>
            <clipPath id="clip0_3110_3205">
              <rect width="56" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <nav>
        <NavLink to="">Dashboard</NavLink>
        <NavLink to="">Produto</NavLink>
      </nav>

      <nav className="flex items-center justify-center bg-slate-700">
        <Button onClick={() => {}} className="mt-4 p-4 rounded-md justify-between" variant='orange'>
          <span className="font-poppins text-base font-medium">
            <AiOutlinePlus />
            Novo produto
          </span> 
        </Button>  
        <div className="w-12 rounded-sm h-12 bg-slate-500 flex justify-center items-center">
          <FaUserLarge className="w-9 h-9" />
        </div>    
      </nav>
    </div>
  )
}