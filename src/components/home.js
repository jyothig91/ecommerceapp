import {useEffect,useState} from 'react';
import '../styles/home.css'
//import CartList from './cart';
function Homepage({addToCart}) {

const[products,setProducts]=useState([]);

 useEffect(()=>{
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
   .then(res => res.json())
   .then(data=>setProducts(data))
//    .then(console.log(records));
 })
       
 
 
    

return(
    <div className="home" >
       { products.map((item,index)=>{
        return(
            <div className='cards' key={index}>
                <div className='product-image'>
                <img src={item.imageURL} alt=""/>
                 </div>
                <div className='details'>
                <h2>{item.name}</h2> 
                <p>${item.price}</p>
                <button onClick={()=>addToCart(item)}>Add to Cart</button>
                </div>
            </div>
        );
       })}
        </div>
)

}
export default Homepage;