import React from 'react'
import logo from '../images/meTube.png';
import menu from '../images/menu.png';
import '../App.css';
const Drawer = () => {
  return (
    <div className='drawer'>
        <img alt="drawer" src={menu} style={{height: "21px", paddingRight: 17}} /> 
        <img alt="logo" src={logo} style={{height: "66px"}}/>
    </div>
  )
}

export default Drawer