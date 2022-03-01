// import axios from 'axios';
// import react from 'react';
// import React, { forwardRef } from 'react'
// import Cookies from 'universal-cookie';
// import '../css/checkout.css'

// export default function Checkout() {
//     const cookies = new Cookies();
//     const id = cookies.get('id'); 
//     const [data , setData] = React.useState([])
//     const getData = () => {
//     // console.log(id);
//     axios.post("http://localhost:8080/checkoutfn", {id})
//     .then(dt =>{
//         // console.log(dt.data);
//         setData(dt.data)
//     })
// }

// React.useEffect(() => {
//     getData()

// }, [])
// console.log(data);

//     return (
//         <div style={{marginTop: '130px'}} >
//            <h5 className='checkout-header'>CHECKOUT</h5>
//            <div className='wrap-checkout' >
//                     <div className='checkout-left'>
//                         <label className='checkout-left-label'>CUSTOMER INFORMATION</label>
//                         {
//                             data.map(it =>(
//                                 <div>
//                                     <div className='left'>
//                                     <span>Table </span>: <span>{it.idTable}</span> <br></br>
//                                     <span>Time </span>: <span>{it.time}</span> <br></br>
//                                     <span>Date </span>: <span>{it.date}</span> 
//                                     </div>

                                    
//                                     {it.dataCart[0].products.map(item =>(
//                                         <div className='right'>
//                                         <span>{item.name}</span> <br></br>
//                                         <span>{item.price}</span> <br></br>
//                                         <span>{item.name}</span> <br></br>
//                                         <span>{item.price}</span> <br></br>
//                                         </div>
//                                     ))}
                                   
                                   
//                                 </div>
                                
//                             ))
//                         }
//                     </div>
                    
//                     <div className='checkout-right'>
//                             <p className='checkout-right-head'>IN YOUR CART</p>
                           
//                             <div style={{display: 'flex'}}>
//                                 <p>Subtotal: </p>
//                                 <p>333$</p>
                                
//                             </div>
//                             <div  style={{display: 'flex'}}>
//                             <p>Discount: </p>
//                                 <p>333$</p>
//                             </div>
//                             <div style={{display: 'flex'}}>
//                                 <p>Estimated Tax: </p>
//                                 <p>$0.00</p>
//                             </div>
//                             <p>TOTAL: </p>
//                     </div>

//             </div>
//             <div className='checkout-complete'><button className='checkout-complete-button'>COMPLETE ORDER</button></div>
//        </div>
        
//     )
// }
