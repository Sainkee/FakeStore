import { useState } from "react";
import { products } from "../../constants";
import {
  ShoppingCart,
  RefreshCcw,
  Search,
  Heart,
  StarHalf,
  Star,
} from "lucide-react";
import StarRating from "../../hooks/rating.jsx";

export default function Products() {
  const icons = [<ShoppingCart />, <Heart />, <RefreshCcw />, <Search />];
  return (
    <div className="w-[95%] mx-auto my-20">
      <h1 className="text-3xl md:text-5xl my-10 text-gray-700 ">
        FEATURED PRODUCTS
      </h1>
      <div className="grid-cols-2 grid   sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 justify-between gap-5">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center   ">
            <span className="group overflow-hidden relative ">
              <span className=" mx-auto  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full group-hover:scale-110 ease-in-out duration-700"
                />
              </span>

              <div className="bg-white/40 hidden   group-hover:flex justify-center items-center gap-2 md:gap-5 z-20 top-0 left-0 bottom-0 right-0 absolute">
                {icons.map((IconComponent, index) => (
                  <span
                    className=" hover:bg-gray-600 p-2 border border-gray-600 text-gray-900 hover:text-yellow-400"
                    key={index}
                  >
                    {IconComponent}
                  </span>
                ))}
              </div>
            </span>
            <span className="text-center bg-white w-full flex flex-col justify-center items-center py-5">
              <h3 className="text-2xl font-medium my-2">{product.name}</h3>
              <span className="flex gap-5 justify-center">
                <span>${product.price}.00</span>
                <span className="line-through text-gray-500 ">
                  ${product.oldPrice}.00
                </span>

                
              </span>
             
              <StarRating rating={Number(product.rating)} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
