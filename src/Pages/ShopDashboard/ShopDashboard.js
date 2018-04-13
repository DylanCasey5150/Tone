import React, { Component } from 'react';
import './ShopDashboard.css';
import Menu_1 from './Menu_1.js';
import Menu_2 from './Menu_2.js';
import Menu_3 from './Menu_3.js';

const MENU_ONE = "MENU_ONE";
const MENU_TWO = "MENU_TWO";
const MENU_THREE = "MENU_THREE";




class ShopDashboard extends Component {
  constructor(){
    super();

this.state={
  currentMenu: MENU_ONE
}

}

changeState = (newCurrentMenu) => {
  this.setState({
    currentMenu: newCurrentMenu,
  });


}



  render() {
    const { currentMenu } = this.state;

    let menu;

    switch(currentMenu){
      case MENU_ONE:
      menu = <Menu_1/>
      break;
      case MENU_TWO:
      menu = <Menu_2/>
      break;
      case MENU_THREE:
      menu = <Menu_3/>
      break;

    }
  return (
  <div className="ShopDashboard">

    <div className="Nav_Wheel">
      <div className="donut-chart-block block">
    		<div className="donut-chart">

        <div onClick={this.changeState.bind(null, MENU_ONE)} id="part1" className="portion-block">  <div className="circle"></div></div>


          <div onClick={this.changeState.bind(null, MENU_TWO)} id="part2" className="portion-block">  <div className="circle"></div></div>

          <div onClick={this.changeState.bind(null, MENU_THREE)}  id="part3" className="portion-block">  <div className="circle"></div></div>

        	<p className="center">  </p>
    		</div>
       </div>
    </div>

    {menu}



  </div>
);
  }
 }


export default ShopDashboard;
