import React, { useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    
  const [menu, setMenu] = useState ("Home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbarmenu">
            <li onClick={()=>setMenu("Home") } className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu") } className={menu==="Menu"?"active":""}>Shops</li>
            <li onClick={()=>setMenu("Orders") } className={menu==="Orders"?"active":""}>Orders</li>
            <li onClick={()=>setMenu("Contact-us") } className={menu==="Contact-us"?"active":""}>Contact</li>

        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} className='srch' alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} className='bskt' alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
