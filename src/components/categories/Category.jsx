import React from "react";
import { category } from "../../constants";

export default function Category() {
  return (
    <div className="w-[95%] mx-auto my-20">
      <h1 className="text-3xl md:text-5xl my-10 text-gray-700 ">CATEGORIES</h1>

      <div className="grid grid-cols-1 gap-10   sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 ">
        {category.map((item, index) => (
          <div key={index} className="flex overflow-hidden bg-white  ">
            <img
              src={item.img}
              alt={item.label}
              className="w-[35%] p-2 hover:rotate-6 transform-gpu hover:scale-125 duration-500 ease-in-out object-cover"
            />
            <div className="flex grow hover:bg-yellow-500 flex-col p-4 items-start justify-center">
              <span className="text-xl md:2xl font-bold">{item.label}</span>
              <span className="text-gray-500">{item.sublabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
