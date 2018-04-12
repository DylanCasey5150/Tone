import React, { Component } from 'react';
import './ShopDashboard.css';
import Menu_1 from './Menu_1.js';





class ShopDashboard extends Component {

  render() {
  return (
    <div className="NotFound">

    <div className="Nav_Wheel">
      <div className="donut-chart-block block">
    		<div className="donut-chart">
    			<div onClick="console.log('Hello')" id="part1" className="portion-block">  <div className="circle"></div></div>
    			<div id="part2" className="portion-block">  <div className="circle"></div></div>
    			<div id="part3" className="portion-block">  <div className="circle"></div></div>
    			<p className="center">  </p>
    		</div>
       </div>
    </div>

    <Menu_1/>









  </div>
);
  }
 }


export default ShopDashboard;
