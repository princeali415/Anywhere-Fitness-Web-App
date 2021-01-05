import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import ClientRegister from "./client-register";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  role: "",
  tos: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUser = [];

export default function SignIn(props) {
  const [newUser, setNewUser] = useState(initialFormValues);

  const handleClick = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.value,
    });
    console.log(newUser);
  };

  return (
    <div className="sign-in-container">
      <div className="orange-bar">
        <h4>The World is Your Gym</h4>
        <h4>Welcome</h4>
      </div>

      {!newUser.role && (
        <button value={2} onClick={handleClick}>
          Client
        </button>
      )}
      
      {!newUser.role && (
        <button value={1} onClick={handleClick}>
          Instructor
        </button>
      )}

      {newUser.role && (
        <form className="form-container">
          <label>
            Name:
            <input name="name" type="name" />
          </label>
          <br />
          <label>
            Email:
            <input name="email" type="email" />
          </label>
          <br />
          <label>
            Password:
            <input name="password" type="password" />
          </label>
        </form>
      )}
    </div>
  );
}
