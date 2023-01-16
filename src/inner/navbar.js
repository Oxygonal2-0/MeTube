import React from 'react'
import Drawer from './drawer';
import Remaining from './remaining';
import Search from './search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Drawer/>
        <Search/>
        <Remaining/>
    </div>
  )
}

export default Navbar