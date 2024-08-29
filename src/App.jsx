import React from "react";
import ProblemInput from "./ProblemInput";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F3F5] via-[#4BD0D1] to-[#1A7E82] flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">LIFE WHISPERS</h1>
        <p className="text-white mt-2">Get advice as if from a family member</p>
      </header>
      <ProblemInput />
    </div>
  );
}

export default App;
