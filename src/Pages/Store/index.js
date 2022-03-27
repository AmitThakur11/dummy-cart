import React from 'react'
import "./store.css"
import { products } from '../../data'
import {FaShoppingCart} from "react-icons/fa"
import {useData} from "../../context/dataContext"
import { useNavigate } from 'react-router'
const Store = () => {
    const {state,dataDispatch} = useData()
    const navigate =useNavigate()
    const inCart =(id)=>{
        let isThere = false;
        state.cart.forEach(element => {
            if(element.id === id)
            isThere=true
        });
        return isThere
    }
    
  return (
    <div className ="store">
        <section>
            sidebar
        </section>
        <section className ="productList">
            {
                products.map((data)=>{
                    return <div className ="productCard" key={data.id}>
                        <img src={data.img} alt="shoes"/>
                        <div className ="productDetails">
                            <p className ="brand">{data.brand}</p>
                            <p className ="name">{data.name}</p>
                            <div className ="price" >Rs. {data.price - data.discount}</div>
                            {/* <div>
                                {
                                    data.size.map((size)=>{
                                        return<span>{size}</span>
                                    })
                                }
                            </div> */}
                        </div>
                        {!inCart(data.id) ? <div className ="productCard__cartBtn icon" onClick={()=>dataDispatch({type:"ADD TO CART",payload : data})}>
                            <FaShoppingCart/>
                            
                        </div>:
                        <div className ="productCard__cartBtn btn " onClick={()=>navigate("/cart")}>
                            Go to cart
                           
                        </div>}
                    </div>
                })
            }
        </section>
      
    </div>
  )
}

export default Store
