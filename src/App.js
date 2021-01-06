import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Link, Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom'
import Home from '../src/components/Home.js'
import SignIn from './components/SignIn'
import Browse from '../src/components/browse'
import './App.css';
import logo from '../src/images/logo-cropped2.png'
import fitnesspic from '../src/images/about-section-pic-1.png'
import fitnesspic2 from '../src/images/why-section-pic.png'
import homepic from '../src/images/fitnessfashion1.jpg'
import Register from "./components/Register";
import CreateClass from "./components/CreateClass/CreateClass";

import PrivateRoute from "./utils/PrivateRoute";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className='app-header'>
        <div className='logo-container'>
          <img id='logo-img' src={logo} alt='af'></img>
          <h3><span className='word1'>Anywhere</span><span className='word2'>|</span><span className='word3'> Fitness</span></h3>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
          {!isLoggedIn && <Link to='/signin'>Sign In</Link>}
          {!isLoggedIn && <Link to='/register'>Register</Link>}
          {isLoggedIn && <Link to='/new-class'>New Class</Link>}
        </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <Home logo={logo} homepic={homepic} pic={fitnesspic} pic2={fitnesspic2} />
          </Route>
          <Route path='/register' component={Register} />
          <Route
            path="/signin"
            render={(props) => {
              return <SignIn {...props} setIsLoggedIn={setIsLoggedIn} />;
            }}
          />
          <PrivateRoute path='/browse' component={Browse}/>
          <PrivateRoute path='/new-class' component={CreateClass} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
