import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const App = () => {
  return (<div className=" max-w-screen min-h-screen flex flex-col">

        <div className='fixed top-0 left-0 bg-slate-950 w-full z-10'>
          <Navbar/>
        </div>
        
        <div className=" flex-grow">

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>

  </div>
    
  );
};

export default App;
