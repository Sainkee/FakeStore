import offer1 from "../../assets/offer-1.jpg";
import offer2 from "../../assets/offer-2.jpg";
import CarouselComponent from "./CarouselComponent";
export default function CarauselSection() {
  return (
    <div className="md:px-20 md:py-10 p-5">
      <div className="flex flex-col md:flex-row w-full gap-5 ">
        <div className="md:w-2/3 w-full">
          <CarouselComponent />
        </div>
        <div className="flex flex-col w-full text-center md:w-1/3  gap-5">
          <div className={`h-1/2 relative group overflow-hidden flex justify-center items-center`}>
            <div className=" z-10   bg-black/30 relative py-24   text-white top-0 left-0 h-full  " />
            <img
              src={`${offer1}`}
              alt=""
              className="absolute -z-10 top-0 left-0 object-cover h-full w-full  transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110   group-hover:rotate-3"
            />
                <div className="flex flex-col  text-white gap-3">
                    <p className="uppercase font-semibold">save 20%</p>
                    <p className="capitalize text-2xl font-bold">special offer</p>
                    <a className=" py-2 bg-yellow-500 text-black" href="#">shop now</a>
                </div>
          </div>
          <div
            className={`h-1/2 object-cover bg-center flex justify-center items-center relative group overflow-hidden `}
          >
            <img
              src={`${offer2}`}
              alt=""
              className="absolute -z-10 top-0 left-0 object-cover h-full w-full transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110   group-hover:rotate-3"
            />
            <div className=" z-10  bg-black/30 relative py-24  text-white top-0 left-0 h-full   " />
            <div className="flex flex-col  text-white gap-5">
                    <p className="uppercase font-semibold">save 20%</p>
                    <p className="capitalize text-2xl font-bold">special offer</p>
                    <a className=" py-2 bg-yellow-500 text-black" href="#">shop now</a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
