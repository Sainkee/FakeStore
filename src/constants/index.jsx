import slider1 from "../assets/carousel-1.jpg";
import slider2 from "../assets/carousel-2.jpg";
import slider3 from "../assets/carousel-3.jpg";
import offer1 from "../assets/offer-1.jpg";
import offer2 from "../assets/offer-2.jpg";

export const navBar = [
  { label: "Home", children: [] },
  { label: "Shop", children: [] },
  { label: "Shop Detail", children: [] },
  { label: "Pages", children: ["shopping cart", "checkout"] },
  { label: "Contact", children: [] },
];

export const sideBar = {
  dresses: {
    label: "Dresses",
    children: ["Mens Dresses", "Womens Dresses", "Kids Dresses"],
  },
  shirts: { label: "Shirts", children: [] },
  tshirts: { label: "T-Shirts", children: [] },
  jeans: { label: "Jeans", children: [] },
  trousers: { label: "Trousers", children: [] },
  shorts: { label: "Shorts", children: [] },
  skirts: { label: "Skirts", children: [] },
  swimwear: { label: "Swimwear", children: [] },
  sweaters: { label: "Sweaters", children: [] },
  sweatshirts: { label: "Sweatshirts", children: [] },
  hoodies: { label: "Hoodies", children: [] },
  jackets: { label: "Jackets", children: [] },
  blazers: { label: "Blazers", children: [] },
};

export const carouselImg = [
  {
    img: slider1,
    label: "Men Fashion ",
  },
  {
    img: slider2,
    label: "Women Fashion ",
  },
  {
    img: slider3,
    label: "Kids Fashion ",
  },
];
