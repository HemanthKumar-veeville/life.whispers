import React from "react";
import ProblemInput from "./ProblemInput";
import Logo from "./assets/LifeWhispers.png";
import Veeville from "./assets/Veeville.jpg";
import IFL from "./assets/IFL.jpg";

function App() {
  return (
    <div className="min-h-screen bg-[#FDF0E6] flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <div className="w-64 h-16">
          <img src={Logo} alt="Life Whispers Logo" className="mx-auto" />
        </div>
        <p className="text-gray-500">
          Veeville. <span className="text-red-500">❤️</span> Life Whispers
        </p>
      </header>
      <ProblemInput />
      <footer className="mt-16">
        <div className="h-32 w-screen bg-white flex justify-around items-center">
          <img src={IFL} alt="Footer Logo" className="h-10 w-40" />
          <img src={Veeville} alt="Footer Logo" className="h-10 w-40" />
        </div>
      </footer>
    </div>
  );
}

export default App;
