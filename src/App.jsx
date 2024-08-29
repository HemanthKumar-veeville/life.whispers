import React from "react";
import ProblemInput from "./ProblemInput";

function App() {
  return (
    <div className="min-h-screen bg-[#f1f3c2] flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#a1d6b2]">LIFE WHISPERS</h1>
        <p className="text-[#e8b86d] mt-2">
          Get advice as if from a family member
        </p>
      </header>
      <ProblemInput />
    </div>
  );
}

export default App;
