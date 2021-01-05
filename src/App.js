import React, {useEffect, useState} from "react";
import * as yup from 'yup'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import schema from '../src/schema/schema'
import Home from '../src/components/Home.js'
import SignIn from '../src/components/sign-in'
import Browse from '../src/components/browse'
import './App.css';
import logo from '../src/images/logo-cropped2.png'
import fitnesspic from '../src/images/about-section-pic-1.png'
import fitnesspic2 from '../src/images/why-section-pic.png'
import homepic from '../src/images/fitnessfashion1.jpg'




function App() {

  return (
    <div className="App">
      <div className='app-header'>
      <div className='logo-container'>
        <img id='logo-img' src={logo} alt='af'></img>
        <h3><span className='word1'>Anywhere</span><span className='word2'>|</span><span className='word3'> Fitness</span></h3>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        <Link to='/sign-in'>Sign In</Link>
      </nav>
      </div>
      <Route exact path='/'>
        <Home logo={logo} homepic={homepic} pic={fitnesspic} pic2={fitnesspic2} />
      </Route>
      <Route path='/sign-in'>
        <SignIn />
      </Route>
      <Route path='/browse'>
        <Browse />
      </Route>
      {/* <Route path='/client-register' render={props => {
                return <ClientRegister {...props}/>
      }}/> */}
    </div>
  );
}

export default App;
