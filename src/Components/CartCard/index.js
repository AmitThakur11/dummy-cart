import React from 'react'
import {FaPlusCircle,FaMinusCircle} from "react-icons/fa"
import {useData} from "../../context/dataContext"
import "./cartCard.css"
function CartCard({product,label}) {
    const {dataDispatch}=useData()
    const lowQty = (qty)=>qty < 2 ? true :false
    
  return (
    <section  className ="cartCard" key={product.id}>
    <div className ="cartCard__one">
      <img src = {product.img} alt ="product"/>
      <div className ="productDetail">
        <p className ="name">{product.name}</p>
        <p className='brand'>{product.brand}</p>
        <span className="discountedPrice">Rs.{product.price*product.qty - product.discount*product.qty}</span>
        <span className ="actualPrice">({product.price * product.qty})</span>
      </div>
    </div>
    <div className ="cartCard__two">
     <div className ="cartCard__qty">
       {!lowQty(product.qty)  ?<button  onClick = {()=>dataDispatch({type : "UPDATE QTY" ,payload : {data : product,value : product.qty - 1 , label :label}})}><FaMinusCircle/></button>:<button className ="disable"><FaMinusCircle/></button>}
       <input type="number" value ={product.qty} onChange = {(e)=>dataDispatch({type : "UPDATE QTY" ,payload : {data : product,value : e.target.value,label :label}})}/>
       <button onClick = {()=>dataDispatch({type : "UPDATE QTY" ,payload : {data : product,value : product.qty + 1,label :label}})}><FaPlusCircle/></button>
     </div>
     {label === "cart" && <button onClick ={()=>dataDispatch({type : "ADD TO SAVED",payload : product})}>SAVE FOR LATER</button>}
     {label === "cart" && <button onClick ={()=>dataDispatch({type : "REMOVE FROM CART",payload : product})}>REMOVE</button>}
     {label === "saved" && <button onClick ={()=>dataDispatch({type : "MOVE TO CART",payload : product})}>MOVE TO CART</button>}
     {label === "saved" && <button onClick ={()=>dataDispatch({type : "REMOVE FROM SAVED",payload : product})}>REMOVE</button>}

    </div>
    
  </section>
  )
}

export default CartCard
