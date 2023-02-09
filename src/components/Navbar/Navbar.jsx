import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/users/user.action";

const Navbar = ({ user }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <>
      <nav className="navbar p-2" style={{ backgroundColor: "#e3f2fd" }}>
        <Link className="navbar-brand fw-bold" to="/">
          Recipe Book
        </Link>
        <div className="ml-auto">
          {user ? (
            <>
              <div className="d-flex">
                <FontAwesomeIcon
                  icon={faUser}
                  onClick={() => navigate("/profile")}
                  style={{ height: "20px", padding: "2%" }}
                />
                <Link
                  className="btn btn-outline-primary"
                  to="/register"
                  style={{ marginLeft: "2%" }}
                  onClick={() => dispatch(logoutAction(navigate))}
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-primary" to="/register">
                Register
              </Link>
              <Link className="btn btn-outline-primary ml-4" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
