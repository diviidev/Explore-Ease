"use client";
import { useState } from "react";

export default function Planning() {
  const [budget, setBudget] = useState([50000]);
  const [startingLocation, setStartingLocation] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [preference, setPreference] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const parsedGroupSize = parseInt(groupSize, 10);
    if (isNaN(parsedGroupSize) || parsedGroupSize <= 0) {
      setError("Please enter a valid group size.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/recommend_travel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          budget: `₹${budget[0]}`,
          starting_location: startingLocation,
          group_size: parsedGroupSize,
          preference_type: preference,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch recommendations");
      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 relative">
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plan Your Perfect Indian Adventure
          </h1>
          <p className="text-xl text-gray-700">
            Discover destinations tailored to your preferences and budget
          </p>
        </section>

        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            Start Planning Your Trip
          </h2>
          <p className="text-gray-500 mb-6">
            Fill in your preferences to get personalized recommendations
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="starting-location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Starting Location
                </label>
                <select
                  id="starting-location"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={startingLocation}
                  onChange={(e) => setStartingLocation(e.target.value)}
                >
                  <option value="" disabled>
                    Select a city
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="group-size"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Group Size
                </label>
                <input
                  id="group-size"
                  type="number"
                  min="1"
                  placeholder="Number of travelers"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Budget (₹)
                </label>
                <input
                  type="range"
                  id="budget"
                  min={10000}
                  max={500000}
                  step={10000}
                  value={budget}
                  onChange={(e) => setBudget([Number(e.target.value)])}
                  className="w-full"
                />
                <p className="text-right text-sm text-gray-500 mt-1">
                  ₹{budget[0]}
                </p>
              </div>

              <div>
                <label
                  htmlFor="preferences"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Travel Preferences
                </label>
                <select
                  id="preferences"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                >
                  <option value="" disabled>
                    Select preferences
                  </option>
                  <option value="Mountains">Mountains</option>
                  <option value="Beaches">Beaches</option>
                  <option value="Temples">Temples</option>
                  <option value="Wildlife">Wildlife</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md"
              >
                {loading ? "Loading..." : "Get Recommendations"}
              </button>
            </div>
          </form>
        </div>

        {error && <div className="text-red-500 mt-4">{error}</div>}

        {recommendation && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your Recommended Trip
            </h3>
            <p className="whitespace-pre-line text-gray-700">
              {recommendation}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
