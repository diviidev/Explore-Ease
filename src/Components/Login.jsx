import React, { useState, useEffect } from "react";

export default function Login({ isLogged, handleLogin }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isLogged) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 3000); // Hide after 3 seconds
      return () => clearTimeout(timer); // Clean the function
    }
  }, [isLogged]);

  return (
    <div className="relative">
      {/* Drop-up Message */}
      {showMessage && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform translate-y-0">
          You are now logged in!
        </div>
      )}

      {/* Conditionally render the login state */}
      {!isLogged && (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-blue-500 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-white">
              Signup
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-blue-500 font-medium text-sm rounded-md shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
