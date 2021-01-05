import React, {useEffect, useState} from "react";
import { Link, Route } from 'react-router-dom'
import ClientRegister from './client-register'

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    role: '',
    tos: false,
  };
  
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
  
  };
  
  const initialUser = [];

export default function SignIn(props){

    const [newUser, setNewUser] = useState(initialFormValues)


    const handleClick = (e) => {
        setNewUser({
            ...newUser,
            role: e.target.value
        })
    }



    return (
        <div className='sign-in-container'>
            <div className='orange-bar'>
                <h4>The World is Your Gym</h4>
                <h4>Welcome</h4>
            </div>
        <Link to='/client-register' value={2} onClick={handleClick}>Client</Link>
        <Link to='/instructor-register' value={1} onClick={handleClick}>Instructor</Link>
            
            
            {/* <Route path='/client-register' component={ClientRegister} > <ClientRegister /> </Route> */}

            {/* <Route path='/client-register' render={props => {
                return <ClientRegister {...props}/>
            }}>Client</Route> */}
        </div>
    )
}