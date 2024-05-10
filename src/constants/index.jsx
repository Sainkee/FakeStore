import slider1 from "../assets/carousel-1.jpg";
import slider2 from "../assets/carousel-2.jpg";
import slider3 from "../assets/carousel-3.jpg";
import offer1 from "../assets/offer-1.jpg";
import offer2 from "../assets/offer-2.jpg";
import product1 from "../assets/product-1.jpg";
import { Check, Truck, ArrowRightLeft, PhoneCall } from "lucide-react";
import cat1 from "../assets/cat1.jpg";

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

export const Features = [
  { icon: <Check size={40} />, label: "Quality Product" },
  { icon: <Truck size={40} />, label: "Free Shipping" },
  { icon: <ArrowRightLeft size={40} />, label: "14-Day Return" },
  { icon: <PhoneCall size={40} />, label: "24/7 Support" },
];

export const category = [
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
  {
    img: cat1,
    label: "Men Fashion ",
    sublabel: "100 Products",
  },
];

export const products = [
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 4,
  },
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 3.5,
  },
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 2,
  },
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 1,
  },
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 4.2,
  },
  {
    name: "Product 1",
    image: product1,
    price: 123.0,
    oldPrice: 150.0,
    quantity: 99,
    rating: 5,
  },
];
