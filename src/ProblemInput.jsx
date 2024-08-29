import React, { useState } from "react";
import axios from "axios";

const ProblemInput = () => {
  const [problem, setProblem] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a humorous psychologist who comes up with uplifting Indian proverbs for every situation. You do not offer any specific suggestions for the problems prompted. You also explain the proverbs you come up with. You should answer like a wise old person. You answer always starts with the proverb.",
            },
            {
              role: "user",
              content: `The user has the following problem: ${problem}`,
            },
          ],
          max_tokens: 1000,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Sorry, I couldn't process your request right now.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setProblem("");
    setResponse("");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white shadow-2xl rounded-lg w-full">
      <div className="w-full flex flex-col space-y-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <textarea
            className="p-4 w-full border-2 border-[#1A7E82] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#4BD0D1] text-gray-800 placeholder-gray-500"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe your problem..."
            required
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="py-3 px-6 w-full bg-[#4BD0D1] text-white rounded-lg hover:bg-[#1A7E82] transition-transform transform hover:scale-105"
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                "Get Advice"
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="py-3 px-6 w-full bg-[#333333] text-white rounded-lg hover:bg-[#1A1A1A] transition-transform transform hover:scale-105"
            >
              Clear Response
            </button>
          </div>
        </form>

        <div className="p-6 w-full bg-[#4BD0D1] rounded-lg shadow-md min-h-[4rem] flex items-center justify-center">
          {response ? (
            <p className="text-white font-semibold">{response}</p>
          ) : (
            <p className="text-white italic">Your advice will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemInput;
