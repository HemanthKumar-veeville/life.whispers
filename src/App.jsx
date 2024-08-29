import React from "react";
import ProblemInput from "./ProblemInput";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center montserrat-me">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">LIFE WHISPERS</h1>
        <p className="text-gray-600 mt-2">
          Get advice as if from a family member
        </p>
      </header>
      <ProblemInput />
    </div>
  );
}

export default App;
