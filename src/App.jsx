import React from "react";
import ProblemInput from "./ProblemInput";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#285A88] via-[#D1C5A4] to-[#ECE6DF] flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">LIFE WHISPERS</h1>
        <p className="text-white mt-2">Get advice as if from a family member</p>
      </header>
      <ProblemInput />
    </div>
  );
}

export default App;
