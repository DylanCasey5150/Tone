import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Forms from "./Pages/Forms/Forms.js";
import Route from "react-router-dom/Route";

import ShopDashboard from "./Pages/ShopDashboard/ShopDashboard.js";
import Tone_Update_Option from "./Pages/Tone_Update_Option/Tone_Update_Option.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/forms">Forms</Link>
          <Link to="/Tone_Update_Option">Tone_Update</Link>
          <Link to="/ShopDashboard">Shop</Link>
          <Route path="/forms" exact strict component={Forms} />
          <Route
            path="/Tone_Update_Option"
            exact
            strict
            component={Tone_Update_Option}
          />
          <Route path="/ShopDashboard" exact strict component={ShopDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
