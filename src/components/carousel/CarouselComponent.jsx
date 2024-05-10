import { carouselImg } from "../../constants";
import { Carousel } from "antd";
const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay infinite={true}>
      {carouselImg.map((item, index) => {
        console.log(item.img);
        return (
          <div key={index} className="relative  ">
            <img
              src={item.img}
              className="absolute -z-10 top-0 left-0 object-cover h-full w-full "
              alt=""
            />
            <div className=" z-10  bg-black/30 relative py-24  text-white top-0 left-0 h-full  ">
              <span className="flex justify-center items-center flex-col w-[80%] gap-10 mx-auto">
                <h1 className="md:text-6xl text-4xl font-semibold capitalize">
                  {item.label}
                </h1>
                <p className="font-medium text-sm md:w-2/3 w-full ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, dolores illum. Labore, quis? Nisi, voluptates
                  perspiciatis voluptatibus error nihil vero illum, possimus,
                </p>
                <a href="" className="border-2 border-white px-3 py-2">
                  Shop Now
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
export default CarouselComponent;
