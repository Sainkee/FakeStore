import { Menu, Search } from "lucide-react";
import HeaderLink from "./HeaderLink";
import { useState } from "react";
export default function HeaderLogo() {
  const [headerLink, setHeaderaLink] = useState(false);
  return (
    <>
      <div className="w-full flex items-center  md:max-w-8xl mx-auto p-5 md:bg-white/20 bg-gray-600 justify-center">
        <nav className="flex justify-between w-full items-center">
          <span className="flex  text-2xl md:text-4xl  font-bold">
            <span className=" text-gray-600 p-2 md:text-yellow-500 bg-white md:bg-gray-700 px-2">
              {" "}
              MULTI
            </span>
            <span className="bg-yellow-500 p-2 md:bg-yellow-500 text-white md:text-gray-700 px-2">
              SHOP
            </span>
          </span>

          <span
            onClick={() => setHeaderaLink(!headerLink)}
            className="md:hidden text-white"
          >
            <Menu size={40} />
          </span>
          <span className=" md:flex items-center  text-xl hidden  justify-center text-gray-300">
            <input
              className="p-1 px-3 border bg-transparent border-gray-400"
              type="text"
              name=""
              id=""
              placeholder="Search For products"
            />
            <button className=" p-1 border border-gray-400  border-l-0 text-yellow-500 ">
              <Search size={28} />
            </button>
          </span>
          <span className="px-4 text-center hidden text-xl md:block capitalize">
            <p className="text-gray-400">customer service</p>
            <p className="font-semibold">+012 345 6 789</p>
          </span>
        </nav>
      </div>
      {headerLink && (
        <span className=" md:hidden ">
          <HeaderLink />
        </span>
      )}
      <span className="hidden md:block">
        <HeaderLink />
      </span>
    </>
  );
}
