import React from "react";
import ProblemInput from "./ProblemInput";

function App() {
  return (
    <div className="min-h-screen bg-[#f1f3f5] flex flex-col justify-center items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#009b9b]">LIFE WHISPERS</h1>
        <p className="text-[#4dbbbb] mt-2">
          Get advice as if from a family member
        </p>
      </header>
      <ProblemInput />
    </div>
  );
}

export default App;
