import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({user}) => {
  let { firstName} = user
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar p-2" style={{ backgroundColor: "#e3f2fd" }}>
        <Link className="navbar-brand fw-bold">Recipe Book</Link>
        <div className="mr-auto">
          {user ? (
            <>
            <div className="d-flex">
              {/* <Link className="btn fw-bold px-5" to="/profile">{firstName}</Link> */}
              <div className="fw-bold px-5">{firstName}</div>
              <Link className="btn btn-outline-primary">Logout</Link>
            </div>
            </>
          ) : (
            <div className="">
              <button className="btn btn-outline-primary">Register</button>
              <button className="btn btn-outline-primary">Login</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
