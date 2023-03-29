import React,{useState,useEffect} from 'react';
import "../styles/cart.css"

function CartList({cart,setCart}) {
  const[price,setPrice]=useState(0);
  const handlePrice = ()=>{
    let ans = 0;
    cart.map((Item)=>(
        ans += Item.quantity * Item.price
    ))
    setPrice(ans);
}
useEffect(()=>{
  handlePrice();
})
const handleRemove = (id) =>{
  const arr = cart.filter((item)=>item.id !== id);
  setCart(arr);
  // handlePrice();
}
  return (
    <div className="main_box">
     
      {cart?.map((item,id)=>{
       return(
        <div className='cart_box' key={item.id}>
            <div className='cart_img'>
            <img src={item.imageURL} width={40} alt=""/>
            <span>{item.name}</span>
            </div>
         <div>
              <button onClick={()=>{
                const cart1= cart.map((item,index)=>{
                  return id === index ? {...item,quantity:item.quantity+1}:item
                })
                setCart(cart1)
              }} >+</button>
              <button > {item.quantity} </button>
              <button onClick={()=>{
                const cart1=cart.map((item,index)=>{
                  return  id === index ?{...item,quantity:item.quantity > 0 ? item.quantity -1 : 0 }: item
                })
                setCart(cart1)
              }}>-</button>
          </div>
          <div>
           
          <span>{item.price * item.quantity}</span>
          <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
      </div>
       )
      })}

      <div className='total'>
        <span>Total</span> 
        <span>Rs -{price}</span>
      </div>
      </div>
      
  )
}

export default CartList;