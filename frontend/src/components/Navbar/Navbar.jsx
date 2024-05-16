import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

export default function Navbar() {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='menu'>
        <li onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</li>
      </ul>

      <div className="right">
        <img src={assets.search_icon} alt="Search Icon" className='search' />

        <div className="search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" className='basket' />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  )
}
