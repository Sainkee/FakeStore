import DropDown from "./DropDown";

import CartAndLove from "./CartAndLove";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-4  w-full">
      <nav className="flex  justify-center md:justify-between w-full  mx-auto gap-3 flex-col  sm:flex-row items-center">
        <ul className="md:flex justify-center hidden text-gray-600  items-center gap-6">
          {["About", "Home", "Help", "FAQS"].map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 justify-center ">
          {" "}
          <span className="  order-first">
            {" "}
            <DropDown data={["Sign Up", "sign In"]} title={"My Account"} />
          </span>
          <span className="">
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </span>
          <span className="">
            <select name="currency" id="currency">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </span>
        </div>
        <span className="flex gap-2 md:hidden justify-center text-gray-600 items-center">
          <CartAndLove />
        </span>
      </nav>
    </div>
  );
}
