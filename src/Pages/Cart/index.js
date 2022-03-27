import React from 'react'
import { useData } from '../../context/dataContext'
import "./cart.css"
import { useNavigate } from 'react-router'
import CartCard from '../../Components/CartCard'
const Cart = () => {
  const {state} =useData()
  const navigate = useNavigate()
  const totalPrice = ()=> state.cart.reduce((acc,el)=>acc + (el.price*el.qty),0)
  const totalDiscount = ()=>state.cart.reduce((acc,el)=>acc + (el.discount*el.qty),0)
  
  return (
    <div className ="cart">
      <section className='cartSection'>
        
      <div className='cartProducts'>
      {state.cart.length === 0 && <div className ="emptyCart">
        <img  src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt ="cart"/>
        <p>Your cart is empty</p>
        <button onClick={()=>navigate("/")}>Shop now</button>
        </div>}
      { state.cart.length !== 0 && <><div className ="cartProducts__header">
            <p>My Cart ({state.cart.length})</p>
          </div>
          <div className ="cartProducts__body">
            {state.cart.map((product)=>{
            return (
             <CartCard product={product} label ="cart"/>
            )
          })
        }
        </div>
        {state.cart.length >0 && <div className ="cartProducts__footer">
          <button className ="orderBtn">PLACE ORDER</button>
        </div>}
      </>}

        </div>

       {state.saved.length !== 0 && <div className='savedProducts'>
        <div className ="cartProducts__header">
            <p>My Saved ({state.saved.length})</p>
          </div>
          <div className ="cartProducts__body">
            {state.saved.map((product)=>{
            return (
             <CartCard product={product} label = "saved"/>
            )
          })
        }
        </div>
       
        </div>}
      </section>
      {state.cart.length > 0  && <section className='orderSummary'>
        <div className ="orderDetail">
          <section className ="orderDetail__header">PRICE DETAILS</section>
          <section className ="orderDetail__body">
            <div className ="orderDetail__row">
              <p>Price({state.cart.length})</p>
              <p>Rs.{totalPrice()}</p>
            </div>
            <div className ="orderDetail__row">
              <p>Discount</p>
              <p> -Rs.{totalDiscount()}</p>
            </div>
          </section>
          <section className ="orderDetail__footer">
          <div className ="orderDetail__row">
              <p>Total</p>
              <p>Rs.{totalPrice() - totalDiscount()}</p>
            </div>

          </section>
        </div>
</section>}
    </div>
  )
}

export default Cart
