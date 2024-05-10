import React from "react";

export default function StaticPhoto({ photo }) {
  return (
    <>
      <div
        className={`h-full relative w-full group overflow-hidden flex justify-center items-center`}
      >
        <div className=" z-10   bg-black/30 relative py-24   text-white top-0 left-0 h-full  " />
        <img
          src={`${photo}`}
          alt=""
          className="absolute -z-10 top-0 left-0 object-cover h-full w-full  transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110   group-hover:rotate-3"
        />
        <div className="flex flex-col  text-white gap-3">
          <p className="uppercase font-semibold">save 20%</p>
          <p className="capitalize text-2xl font-bold">special offer</p>
          <a className=" py-2 bg-yellow-500 text-black" href="#">
            shop now
          </a>
        </div>
      </div>
    </>
  );
}
