import { Features } from "../../constants";
export default function Feature() {
  return (
    <div className=" grid grid-cols-1 gap-4    sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 justify-between text-xl md:text-2xl mb-10   w-[90%] mx-auto ">
      {Features.map((feature, i) => {
        return (
          <div key={i} className="flex  md:gap-2 bg-white md:px-2 py-8  items-center">
            <span className="text-yellow-400  ">{feature.icon}</span>
            <span className="whitespace-nowrap">{feature.label}</span>
          </div>
        );
      })}
    </div>
  );
}
