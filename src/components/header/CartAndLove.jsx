import { Heart, ShoppingCart,ChevronDown } from "lucide-react";

export default function CartAndLove({customColor= "black"}) {
   console.log(customColor)
  return (
    <span className="gap-2 flex">

      <span className={`flex  justify-center items-center text-${customColor} `}>
        {" "}
        <Heart />
        <span className="border rounded-full border-gray-600  h-7 w-7 flex justify-center items-center">
          0
        </span>
      </span>
      <span className={`flex  justify-center items-center text-${customColor}`}>
        <ShoppingCart />
        <span className=" border rounded-full border-gray-600  h-7 w-7  flex justify-center items-center  ">
          0
        </span>
      </span>
    </span>
  );
}
