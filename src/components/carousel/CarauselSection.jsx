import offer1 from "../../assets/offer-1.jpg";
import offer2 from "../../assets/offer-2.jpg";
import StaticPhoto from "../StaticPhoto";
import CarouselComponent from "./CarouselComponent";
export default function CarauselSection() {
  return (
    <div className="md:px-20 md:py-10 p-5">
      <div className="flex flex-col md:flex-row w-full gap-5 ">
        <div className="md:w-2/3 w-full">
          <CarouselComponent />
        </div>
        <div className="flex flex-col w-full text-center md:w-1/3  gap-5">
          <StaticPhoto photo={offer1} />
          <StaticPhoto photo={offer2} />
        </div>
      </div>
    </div>
  );
}
