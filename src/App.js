
import React,{useState} from 'react';
import Homepage from './components/home';
import Navbar from './components/navbar';
import CartList from './components/cart';
function App() {
  const[cart,setCart]=useState([]);
  const[showCart,setShowCart]=useState(true)
  
  const addToCart=(data)=>{
    console.log(data)
     setCart([...cart,{...data,quantity:1}])
    }   
  return (
    <div className="App">
      <Navbar size={cart.length} setShowCart={setShowCart}/>
      {
        showCart ? <Homepage addToCart={addToCart}/>:
        <CartList cart={cart} setCart={setCart}/>
        
      }
     
      
   
    </div>
  );
}

export default App;
