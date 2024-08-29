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
          model: "gpt-3.5-turbo", // Using gpt-3.5-turbo with the chat/completions endpoint
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

  const getRandomQuote = () => {
    const quotes = [
      "Family is not an important thing, it's everything.",
      "The love of a family is life's greatest blessing.",
      "In family life, love is the oil that eases friction.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Describe your problem..."
          required
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? "Processing..." : "Get Advice"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
};

export default ProblemInput;
