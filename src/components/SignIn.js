import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import * as yup from 'yup'
import axios from 'axios'
import schema from '../schema/schema'

const initialFormValues = {
    email: "",
    password: "",
  };
  
  const initialFormErrors = {
    email: "",
    password: "",
  };
  const initialDisabled = true;

export default function SignIn(props) {

  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  
  const updateForm = (type, value) => {
    yup.reach(schema, type).validate(value).then(() => {
      setFormErrors({
        ...formErrors, [type]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors, [type]: err.errors[0],
      })
    })
    setFormValues({...formValues, [type]: value});
  };
  
  const submitForm = () => {
     postNewformValues(formValues)
  };

  const postNewformValues = () => {
      axios.post('https://fitness-anywhere-app.herokuapp.com/api/users/login', formValues).then(res => {

          console.log(res)
      })
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues]);




  
  
  //Helper Functions  
  const onSubmit = evt => {
    evt.preventDefault();
    submitForm();
    {console.log(formValues)}
  }
  const update = (evt) => {
    const {type, value} = evt.target;
    updateForm(type, value);
  }

  return (
    <div className="sign-in-container" onSubmit={onSubmit}>
      
      <div className="orange-bar">
        <h4>The World is Your Gym</h4>
        <h4>Welcome</h4>
      </div>
        <form className="form-container" >
          <label>
            Email:
            <input name="email" type="email" value={formValues.email} onChange={update}/>
          </label>
          <br />
          <label>
            Password:
            <input name="password" type="password" value={formValues.password} onChange={update}/>
          </label>
          <br/>
            <button disabled={disabled}>Submit</button>
            
        </form>
      
    </div>
  );
}