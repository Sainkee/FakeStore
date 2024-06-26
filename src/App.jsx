import { useState } from "react";

import Header from "./components/header/Header";
import HeaderLogo from "./components/header/HeaderLogo";
import CarauselSection from "./components/carousel/CarauselSection";
import Feature from "./components/FeatureSection/Feature";
import Category from "./components/categories/Category";
import Products from "./components/product/Products";
import Footer from "./components/footer/Footer";
import PhotoAdd from "./components/Photoad/PhotoAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" mx-auto ">
        <Header />
        <HeaderLogo />
        <CarauselSection />
        <Feature />
        <Category />
        <Products />
        <PhotoAdd />
        <Footer />
      </div>
    </>
  );
}

export default App;
