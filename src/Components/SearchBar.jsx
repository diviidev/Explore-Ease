import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full bg-white shadow-md py-4">
      <form className="max-w-7xl mx-auto px-4 flex items-center space-x-4">
        {/* Destination Input */}
        <div className="flex flex-col">
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
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Group Size Input */}
        <div className="flex flex-col">
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
        <div className="flex flex-col">
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

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
