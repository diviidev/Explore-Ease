import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full bg-white shadow-md py-4">
      <form className="max-w-7xl mx-auto px-4 flex flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Destination Input */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col relative">
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Enter destination"
            className="mt-1 block w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute top-8 left-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.686 2 6 4.686 6 8c0 4.98 6 12 6 12s6-7.02 6-12c0-3.314-2.686-6-6-6z"
              />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </div>
        </div>

        {/* Group Size Input */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col">
          <label
            htmlFor="groupSize"
            className="block text-sm font-medium text-gray-700"
          >
            Group Size
          </label>
          <input
            type="number"
            id="groupSize"
            placeholder="Enter group size"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Preferences Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col">
          <label
            htmlFor="preference"
            className="block text-sm font-medium text-gray-700"
          >
            Preference
          </label>
          <select
            id="preference"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Preference</option>
            <option value="beaches">Beaches</option>
            <option value="waterfalls">Waterfalls</option>
            <option value="mountains">Mountains</option>
            <option value="temples">Temples</option>
            <option value="trekking">Trekking</option>
          </select>
        </div>

        {/* Budget Slider */}
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700"
          >
            Budget (in $)
          </label>
          <input
            type="range"
            id="budget"
            min="100"
            max="10000"
            step="100"
            className="mt-1 block w-full cursor-pointer"
          />
          <div className="text-xs text-gray-500 mt-1">100 - 10,000</div>
        </div>

        {/* Submit Button */}
        <div className="w-full lg:w-auto">
          <button
            type="submit"
            className="w-full lg:w-auto px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
