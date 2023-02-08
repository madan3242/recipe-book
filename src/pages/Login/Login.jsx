import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../redux/users/user.action";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
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
        case "email":
          if (!value) {
            stateObj[name] = "Please enter proper Email.";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  };

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getLogin(input, navigate));
  };

  return (
    <>
      <div className="bg">
      <nav className="navbar p-2">
        <Link className="navbar-brand fw-bold">Recipe Book</Link>
      </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto mt-5 p-5 rounded" style={{ backgroundColor: "#e3f2fd"}}>
              <form onSubmit={submitHandler}>
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
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
                <div className="row">
                  <span>
                    Don't have an account? <Link to="/register">Register</Link>{" "}
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

export default Login;
