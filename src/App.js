import React, { useState } from "react";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Admin from "./Components/Admin";
import User from "./Components/User";
export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLogged(true);
  };

  return (
    <div>
      {/* <Login isLogged={isLogged} handleLogin={handleLogin} />
      <NavBar /> */}
      {/* <Admin /> */}
      <User />
    </div>
  );
}
