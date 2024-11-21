import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLogged(true);
  };

  return (
    <div>
      {/* Show Login component if not logged in, else show Home */}
      {!isLogged ? (
        <Login isLogged={isLogged} handleLogin={handleLogin} />
      ) : (
        <Home /> // Home component will contain the NavBar and other elements
      )}
    </div>
  );
}
