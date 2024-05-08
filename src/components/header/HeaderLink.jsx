import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { navBar } from "../../constants";
import CartAndLove from "./CartAndLove";

export default function HeaderLink() {
  const [categoryState, setCategoryState] = useState(false); // Corrected variable name to follow camelCase convention

  return (
    <div className="flex justify-between  items-center   bg-gray-600 pb-5 md:pb-0 ">
      <ul className="flex flex-col md:flex-row  flex-1 grow capitalize items-start md:items-center  w-full px-5 gap-6  text-xl text-white ">
        <li
          onClick={() => setCategoryState(!categoryState)}
          className="hidden md:block relative md:w-[20%] h-full py-3 bg-yellow-500"
        >
          <a href="#" className=" flex text-gray-700 justify-between items-center px-3">
            <span className="flex items-center gap-2"> <Menu/> <span>Categories</span></span>
            <ChevronDown />
          </a>
          {categoryState && (
            <ul className="absolute top-22 mt-3 bg-white w-full text-black flex flex-col gap-2 py-2   px-2 ">
              {navBar.Categories.more.map((item, index) => (
                <li
                  key={index}
                  className="px-6 whitespace-nowrap cursor-pointer"
                >
                  {item}
                  
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">pages</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
     <span className="hidden md:flex"> <CartAndLove customColor={"yellow-500"} /></span>

    </div>
  );
}
