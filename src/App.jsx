import { useState } from "react";

import Header from "./components/header/Header";
import HeaderLogo from "./components/HeaderLogo";
import CarauselSection from "./components/carousel/CarauselSection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" mx-auto ">
        <Header />
        <HeaderLogo />
        <CarauselSection/>
        
      </div>
    </>
  );
}

export default App;
