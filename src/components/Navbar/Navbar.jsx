import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <>
      <nav className="navbar p-2" style={{ backgroundColor: "#e3f2fd" }}>
        <Link className="navbar-brand fw-bold" to="/">Recipe Book</Link>
        <div className="ml-auto">
            <Link className="btn btn-outline-primary" to="/register">Register</Link>
            <Link className="btn btn-outline-primary ml-4" to="/login">Login</Link>
        </div>


        {/* {user ? (<>
          <FontAwesomeIcon  icon={faUser} onClick={() => navigate("/profile")} /> <span>{user.firstName}</span> 
        </>
        ) : () */}
      </nav>
    </>
  );
};

export default Navbar;
