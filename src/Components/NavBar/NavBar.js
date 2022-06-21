import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"
import {navItems} from "./NavItems"

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='nav-items'>
          {
            navItems.map((item) => {
              return (
              <li
              key={item.id}
              className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )})
          }
        </ul>
      </nav>
    </>
  )
}

export default NavBar