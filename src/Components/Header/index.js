import React from 'react'
import {useNavigate} from "react-router-dom"
import "./header.css"
import {FaShoppingCart,FaSearch} from "react-icons/fa"
import { useData } from '../../context/dataContext'
const Header = () => {
    const navigate = useNavigate()
    const {state}= useData()
  return (
    <header>
        <nav>
        <div className ="logo" onClick={()=>navigate("/")}>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt ="logo"/>
            <div className ="logoFooter">
                <span>Explore</span>
                <span>Plus</span>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="explore"/>
            </div>

        </div>
        <div className ="search">
            <div className='searchBar'>
                <input type="text" placeholder="Search for products. brands and more"/>
                <FaSearch/>

            </div>
            
        </div>
        <div className ="headerMenu">
            <div className ="headerOption" onClick={()=>navigate("/cart")}>
            <div className ="headerIcon">
             <FaShoppingCart/>
             <span className='iconBadge'>{state.cart.length}</span>
            </div>
            
            <span>Cart</span>
            </div>

        </div>
        </nav>
    </header>
  )
}

export default Header
