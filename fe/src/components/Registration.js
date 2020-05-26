import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const Registration = (props) => {
  const [registrationState, setRegistrationState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setRegistrationState({
      ...registrationState,
      [e.target.name]: e.target.value,
    });
  };

  const open = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/registration", registrationState)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("Err is:", err);
      });
  };

  return (
    <>
      <h1>Welcome to Pintereach</h1>
      <div>
        <form onSubmit={open}>
          <input
            type="text"
            placeholder="Login"
            name="username"
            value={registrationState.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={registrationState.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={registrationState.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
