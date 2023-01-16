import React from 'react'
import MainPage from './mainPage';
import Navbar from './navbar';

const Dashboard = () => {
  return (
    <div className='homeDiv' style={{ background: "linear-gradient(black, rgb(14 23 62), rgb(45 54 102))"}}>
      <div style={{width: '100%', position:'fixed', zIndex: '1'}}><Navbar/></div>
      <MainPage/>
    </div>
  );
}

export default Dashboard