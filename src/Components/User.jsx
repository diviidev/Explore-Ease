import React, { useState } from "react";

export default function User() {
  // State for preferences and recommendations
  const [preferences, setPreferences] = useState({
    budget: 1000,
    destination: "",
    interests: [],
  });

  const [recommendations, setRecommendations] = useState({
    attractions: [],
    hotels: [],
    restaurants: [],
    travelOptions: [],
  });

  // Handle budget change
  const handleBudgetChange = (e) => {
    setPreferences({ ...preferences, budget: e.target.value });
  };

  // Handle destination change
  const handleDestinationChange = (e) => {
    setPreferences({ ...preferences, destination: e.target.value });
  };

  // Fetch recommendations based on preferences
  const fetchRecommendations = () => {
    setRecommendations({
      attractions: ["Beach", "Historic Sites", "Museums"],
      hotels: ["Budget Hotel A", "Luxury Hotel B"],
      restaurants: ["Local Cuisine", "International Dishes"],
      travelOptions: ["Bus", "Train", "Flight"],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">
          Your Personalized Travel Recommendations
        </h1>
        <div className="flex justify-center gap-4 items-center mb-6">
          <input
            type="text"
            className="border rounded-lg p-3 w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter destination"
            value={preferences.destination}
            onChange={handleDestinationChange}
          />
          <button
            onClick={fetchRecommendations}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            Get Recommendations
          </button>
        </div>
        <div className="flex justify-center gap-4">
          <input
            type="number"
            className="border rounded-lg p-3 w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your budget"
            value={preferences.budget}
            onChange={handleBudgetChange}
          />
        </div>
      </header>

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-lg shadow-lg shadow-indigo-500/50">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            Budget Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-lg text-gray-800">Transport</h3>
              <p className="text-xl font-semibold text-indigo-600">
                ${(preferences.budget * 0.4).toFixed(2)}
              </p>
              <p className="text-gray-500">(40%)</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                Accommodation
              </h3>
              <p className="text-xl font-semibold text-indigo-600">
                ${(preferences.budget * 0.3).toFixed(2)}
              </p>
              <p className="text-gray-500">(30%)</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-gray-800">Food</h3>
              <p className="text-xl font-semibold text-indigo-600">
                ${(preferences.budget * 0.2).toFixed(2)}
              </p>
              <p className="text-gray-500">(20%)</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                Miscellaneous
              </h3>
              <p className="text-xl font-semibold text-indigo-600">
                ${(preferences.budget * 0.1).toFixed(2)}
              </p>
              <p className="text-gray-500">(10%)</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg shadow-indigo-500/50">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            Recommendations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-lg shadow-md p-4 bg-indigo-50">
              <h3 className="font-semibold text-lg text-indigo-600">
                Attractions
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recommendations.attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-indigo-50">
              <h3 className="font-semibold text-lg text-indigo-600">Hotels</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recommendations.hotels.map((hotel, index) => (
                  <li key={index}>{hotel}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-indigo-50">
              <h3 className="font-semibold text-lg text-indigo-600">
                Restaurants
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recommendations.restaurants.map((restaurant, index) => (
                  <li key={index}>{restaurant}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg shadow-md p-4 bg-indigo-50">
              <h3 className="font-semibold text-lg text-indigo-600">
                Travel Options
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recommendations.travelOptions.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
