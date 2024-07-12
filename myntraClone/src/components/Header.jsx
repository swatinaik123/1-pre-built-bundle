import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Home & Living</Link>
            <Link href="#">Beauty</Link>
            <Link href="#">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoMdPerson />
               
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaClipboardList />
                {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
                <span className="action_name">Wishlist</span>
            </div>

            <Link to="/bag" className="action_container">
                {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
                <IoBagOutline />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">0</span>
            </Link>
        </div>
    </header>
    </>
  )
}

export default Header
