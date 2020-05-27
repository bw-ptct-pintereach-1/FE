import React, { useState } from "react";
import axios from "axios";

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
    axios
      .post("https://pintreach1.herokuapp.com/auth/register", registrationState)
      .then((res) => {
        props.history.push("/login");
      })
      .catch((err) => {
        console.log("Err is:", err);
      });
  };

  return (
    <>
      <h1>Register to Pintereach</h1>
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
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
