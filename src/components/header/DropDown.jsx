import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropDown(props) {
  console.log(props.data);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative   ">
        <button
          className=" flex gap-2 bg-white px-3 whitespace-nowrap  "
          onClick={() => setShow(!show)}
        >
          {" "}
          <span>{props.title}</span> <ChevronDown />{" "}
        </button>
        {show && (
          <ul className="absolute    top-7 bg-gray-300 flex flex-col gap-2 py-2 w-full min-w-fit px-2 rounded">
            {props.data.map((item, index) => (
              <li
                key={index}
                className=" px-6 whitespace-nowrap cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
