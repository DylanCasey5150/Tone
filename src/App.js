import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Forms from './Pages/Forms/Forms.js';
import Route from 'react-router-dom/Route';

import ShopDashboard from './Pages/ShopDashboard/ShopDashboard.js';




class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">

       <Link to="/forms">Forms</Link>

       <Link to="/ShopDashboard">Shop</Link>




       <Route path="/forms" exact strict component={Forms}/>
       


        <Route path="/ShopDashboard" exact strict component={ShopDashboard}


        />






       </div>
      </Router>
    );
  }
}

export default App;
