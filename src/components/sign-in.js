import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

const initialFormValues = {
  email: "",
  password: "",
  role: "",
};

const initialFormErrors = {
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
  };

  return (
    <div className="sign-in-container">
      {console.log(newUser)}
      <div className="orange-bar">
        <h4>The World is Your Gym</h4>
        <h4>Welcome</h4>
      </div>

      {!newUser.role && (
        <button value={1} onClick={handleClick}>
          Client
        </button>
      )}
      
      {!newUser.role && (
        <button value={2} onClick={handleClick}>
          Instructor
        </button>
      )}

      {newUser.role && (
        <form className="form-container">
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
