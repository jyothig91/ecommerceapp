import React from 'react'
import '../styles/nav.css';
    

const Navbar = ({size,setShowCart}) => {
  return (
    <nav>
      <div className='nav-box' >
        <h1>Shopping App</h1>
        <span className='shop' onClick={()=>setShowCart(true)}>Home</span>
        <div className='cart' onClick={()=>setShowCart(false)}>
            <span>
                <i className='fas fa-cart-plus'></i>
            </span>
            <sup>{size}</sup>
        </div>
      </div>
    
    </nav>
  )  
}

export default Navbar
