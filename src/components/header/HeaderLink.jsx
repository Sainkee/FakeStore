import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { navBar, sideBar } from "../../constants";
import CartAndLove from "./CartAndLove";

export default function HeaderLink() {
  const [categoryState, setCategoryState] = useState(false);

  return (
    <div className="flex justify-between items-center bg-gray-600 pb-5 md:pb-0">
      <ul className="flex flex-col md:flex-row flex-1 grow capitalize items-start md:items-center w-full px-5 gap-6 text-xl text-white">
        <li className="hidden md:block relative md:w-[20%] min-w-[25%] md:max-w-[30%] h-full  bg-yellow-500">
          <a
            href="#"
            onClick={() => setCategoryState(!categoryState)}
            className="flex text-gray-700 justify-between items-center p-3"
          >
            <span className="flex items-center gap-2">
              <Menu />
              <span>Categories</span>
            </span>
            {<ChevronDown />}
          </a>
          {categoryState && (
            <ul className="absolute top-22   bg-white w-full text-black flex flex-col gap-2 py-2 px-2">
              {Object.keys(sideBar).map((categoryKey, index) => {
                const category = sideBar[categoryKey];
                return (
                  <li
                    key={index}
                    className="px-6 relative group whitespace-nowrap cursor-pointer"
                  >
                    <span className="flex">
                      {category.label}
                      {category.children.length > 0 && <span className="flex items-center"> <ChevronDown /></span>}{" "}
                    </span>
                    <span className=" hidden group-hover:block">
                      {category.children.length > 0 && (
                        <ul className="absolute top-2 left-[35%] z-20  bg-gray-200 w-fit text-black flex flex-col gap-2 p-5">
                          {category.children.map((child, childIndex) => (
                            <li
                              key={childIndex}
                              className="whitespace-nowrap cursor-pointer"
                            >
                              <a href={`/${child}`}>{child}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </li>

        {navBar.map((item, index) => (
          <li key={index} className="group">
            <a
              href={`/${item}`}
              className="flex  justify-center items-center gap-1"
            >
              {item.label} {item.children.length > 0 && <ChevronDown />}
            </a>
            {item.children.length > 0 && (
              <ul className="absolute hidden group-hover:block  bg-white  text-black p-4">
                {item.children.map((item, index) => (
                  <li key={index}>
                    <a href={`/${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <span className="hidden md:flex">
        <CartAndLove customColor={"yellow-500"} />
      </span>
    </div>
  );
}
