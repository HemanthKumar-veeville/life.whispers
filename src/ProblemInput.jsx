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
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white shadow-lg rounded-xl w-full">
      <div className="w-full flex flex-col space-y-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            className="p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E4A71] text-gray-800 placeholder-gray-500"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Describe your problem..."
            required
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="py-2 px-6 w-full bg-[#F5762A] text-white rounded-lg hover:bg-[#E16521] transition-transform transform hover:scale-105"
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
              className="py-2 px-6 w-full bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-transform transform hover:scale-105"
            >
              Clear Response
            </button>
          </div>
        </form>

        <div className="p-4 w-full bg-[#E6F8F6] rounded-lg shadow-md min-h-[4rem] flex items-center justify-center">
          {response ? (
            <p className="text-gray-700 font-semibold">{response}</p>
          ) : (
            <p className="text-gray-400 italic">
              Your advice will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemInput;
