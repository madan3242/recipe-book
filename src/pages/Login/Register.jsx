import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getRegistration } from "../../redux/users/user.action";
import "./style.css";

const Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter First Name.";
          }
          break;
        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter Last Name.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter proper Email.";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let submitHandler = (event) => {
    event.preventDefault();
    dispatch(getRegistration(input, navigate));
  };

  return (
    <>
      <div className="bg">
        <nav className="navbar p-2" style={{ backgroundColor: "#e3f2fd" }}>
          <Link className="navbar-brand fw-bold">Recipe Book</Link>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto mt-5 p-5 rounded" style={{ backgroundColor: "#e3f2fd"}}>
              <form onSubmit={submitHandler}>
                <h2>Register</h2>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      onChange={onInputChange}
                      onBlur={validateInput}
                    />
                    {error.firstName && (
                      <span className="text-danger">{error.firstName}</span>
                    )}
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      onChange={onInputChange}
                      onBlur={validateInput}
                    />
                    {error.lastName && (
                      <span className="text-danger">{error.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      aria-label="Email"
                      onChange={onInputChange}
                      onBlur={validateInput}
                    />
                    {error.email && (
                      <span className="text-danger">{error.email}</span>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      aria-label="Password"
                      onChange={onInputChange}
                      onBlur={validateInput}
                    />
                    {error.password && (
                      <span className="text-danger">{error.password}</span>
                    )}
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                      aria-label="Confirm Password"
                      onChange={onInputChange}
                      onBlur={validateInput}
                    />
                    {error.confirmPassword && (
                      <span className="text-danger">{error.confirmPassword}</span>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
                <div className="row">
                  <span>
                    Already have an account? <Link to="/">Login</Link>{" "}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;