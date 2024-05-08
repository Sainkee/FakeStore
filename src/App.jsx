import { useState } from "react";

import Header from "./components/header/Header";
import HeaderLogo from "./components/HeaderLogo";
import HeaderLink from "./components/header/HeaderLink";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" mx-auto ">
        <Header />
        <HeaderLogo />
        
      </div>
    </>
  );
}

export default App;
