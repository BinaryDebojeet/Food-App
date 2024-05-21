import React from 'react'
import "./Menu.css"
import {menu_list} from "../../assets/assets"

export default function ({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 className='explore-menu-heading'>Explore Our <span className='quickeats'>Menu</span></h1>
        <p className='explore-menu-text'>Discover delicious dishes! From starters to desserts, our menu features fresh, locally sourced ingredients</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menu-image" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}
