import React from "react";
import { Link } from "react-router-dom";

import useUser from "../hooks/useUser";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="header">
      {isLogged ? (
        <Link href="#" onClick={handleClick} to="*">
          Logout
        </Link>
      ) : (
        <Link to="login">Login</Link>
      )}
    </header>
  );
}

export default Header;
