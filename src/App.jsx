import React from "react";
import ProblemInput from "./ProblemInput";
import Logo from "./assets/LifeWhispers.png";
import Veeville from "./assets/Veeville.jpg";
import IFL from "./assets/IFL.jpg";
import BackgroundImage from "./assets/BG.png"; // Import your background image

function App() {
  return (
    <div className=" bg-[#FDF0E6] flex flex-col justify-center items-between">
      <header className="flex flex-col items-center mb-8 mt-8">
        <div className="w-64 h-20">
          <img src={Logo} alt="Life Whispers Logo" className="mx-auto" />
        </div>
        <p className="text-gray-500 w-fit text-center mr-11">
          Veeville <span className="text-red-500">❤️</span> IndiaFirst Life
        </p>
      </header>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "100% 160%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ProblemInput />
      </div>
      <footer className="mt-16">
        <div className="h-36 w-screen bg-white flex justify-around items-center">
          <img src={IFL} alt="Footer Logo" className=" w-40" />
          <img src={Veeville} alt="Footer Logo" className=" w-40" />
        </div>
      </footer>
    </div>
  );
}

export default App;
