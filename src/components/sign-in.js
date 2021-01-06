import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import * as yup from 'yup'
import axios from 'axios'
import schema from '../src/schema/schema'

const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};

// const initialUser = []; not sure what this is for

const initialDisabled = true;

export default function SignIn(props) {
  const [newUser, setNewUser] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const updateForm = (name, value) => {
    yup.reach(schema, name).validate(value).then(() => {
      setFormErrors({
        ...formErrors, [name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
         ...formErrors, [name]: err.errors[0],
      })
    })
    setFormValues({...formValues, [name]: value})
  };

  const submitForm = evt => {
    const newUser = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser)
  };

  const getUser = () => {
    axios.get('').then(res => {
      console.log(res.data)
      setNewUser(res.data.data);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }



  const handleClick = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.value,
    });
  
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
            Email:
            <input name="email" type="email" />
          </label>
          <br />
          <label>
            Password:
            <input name="password" type="password" />
          </label>
          <br/>
            <button>Submit</button>
            
        </form>
      )}
    </div>
  );
}
