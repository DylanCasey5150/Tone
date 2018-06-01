import React, { Component } from "react";
import "./Drop_Menu.css";

class Dropdown extends Component {
  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}

export default Dropdown;
