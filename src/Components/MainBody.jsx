import React from "react";
import i2Image from "../Images/i2.jpeg";
import i3Image from "../Images/i3.jpeg";
import i4Image from "../Images/i4.jpg";
import i5Image from "../Images/i5.jpeg";
import i6Image from "../Images/i6.jpeg";
import i7Image from "../Images/i7.jpeg";
import i8Image from "../Images/i8.jpeg";

export default function MainBody() {
  // Sample data for destinations
  const destinations = [
    {
      id: 1,
      name: "Paris",
      location: "France",
      image: i2Image, // Using the imported image here
      transportation: "Flight, Train",
    },
    {
      id: 2,
      name: "Tokyo",
      location: "Japan",
      image: i3Image, // External image URL
      transportation: "Flight, Bus, Train",
    },
    {
      id: 3,
      name: "New York",
      location: "USA",
      image: i4Image, // External image URL
      transportation: "Flight, Subway, Taxi",
    },
    {
      id: 4,
      name: "London",
      location: "UK",
      image: i5Image, // External image URL
      transportation: "Flight, Tube, Bus",
    },
    {
      id: 5,
      name: "Sydney",
      location: "Australia",
      image: i6Image, // Replace with actual image URL
      transportation: "Flight, Bus, Ferry",
    },
    {
      id: 6,
      name: "Dubai",
      location: "UAE",
      image: i7Image, // Replace with actual image URL
      transportation: "Flight, Taxi, Metro",
    },
    {
      id: 7,
      name: "Agra",
      location: "India",
      image: i8Image, // External image URL
      transportation: "Flight, Subway, Taxi",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-600">
                {destination.name}
              </h3>
              <p className="text-gray-500">{destination.location}</p>
              <p className="text-gray-700 mt-2">
                Transportation: {destination.transportation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
