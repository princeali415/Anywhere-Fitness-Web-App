import React, { useState, useEffect } from 'react'
import Classform from './Classform'
import Class from './Class'
import axios from 'axios'


const initialFormValues = {
   
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity_level: "",
    location: "",
    max_class_size: "",
  };

export default function CreateClass() {

    const [classes, setClasses] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues); 


    const updateForm = (inputName, inputValue) => {
        setFormValues({
            ...inputName, 
            [inputName]: inputValue,
        })
    }
    
    const submitForm = () => {
        const newClass = {
            name: formValues.name,
            type: formValues.type,
            start_time: formValues.start_time,
            duration: formValues.duration,
            intensity_level: formValues.intensity_level,
            location: formValues.location,
            max_class_size: formValues.max_class_size,
        }
        axios.post(" https://fitness-anywhere-app.herokuapp.com/api/classes", newClass)
        .then((res) => {
        setClasses([newClass, ...classes]); 
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
      });
    }

    return (
        <div>
            <Classform 
            values={formValues}
            update={updateForm}
            submit={submitForm}
            />

            
        </div>
    )
}
