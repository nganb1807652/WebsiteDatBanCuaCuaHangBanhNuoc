import React from 'react'
import '../css/menu.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function MenuLeft(props) {
    console.log(props.dt);
    const [toggle , setToggle] = React.useState(true)
    const clickBtn = ()  => {
        
        setToggle(!toggle)
    }


    return (
        <div>
           <div style={{marginTop:'120px'}}></div>
           <div className="link-page">
                <ul>
                   <li>Home</li>
                   <li>&nbsp; / &nbsp;</li>
                   <li>Product</li>
                </ul>
                <ul>
                    <div className="border-product"></div>
                </ul>
                <ul>
                   <h5 style={{textTransform:'uppercase',marginLeft:10, color: '#614430'}}>{props.title ? props.title : "all products"}</h5>
                </ul>
           </div>
           <div className='product'>
                <div className='product-left'>
                    <div className="left1">
                       <div className="left1-img">
                           <h2 className="left1-title">
                               <span>Category</span>
                           </h2>
                       </div>
                   </div>
                    <div className="left2">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="#">Products</Link>
                           
                            {
                                toggle ?  <i onClick={clickBtn} style={{float:'right',marginTop:'12px' , border:'none', background:'none',cursor:'pointer',fontSize:15,fontWeight:'bold',color:'#c69c6d',transition: 0.1}} className="fa fa-plus"></i>
                                : 
                                <i onClick={clickBtn} style={{float:'right',marginTop:'12px' , border:'none', background:'none',cursor:'pointer',fontSize:15,fontWeight:'bold',color:'#c69c6d', transition: 0.1}} className="fa fa-minus"></i>
                               }
                            {
                                toggle == false ?
                            <div className='dropdown'>
                                <ul className='dropdown-ul'>
                                    <li className='dropdown-li'>
                                        <Link to="/menu/type=cake">Cake</Link>
                                    </li>
                                    <li className='dropdown-li'>
                                        <Link to="/menu/type=drink">Tea</Link>
                                    </li>
                                </ul>
                            </div>
                            : <></>
                            }

                            </li>
                        </ul>
                    </div>
                    <div className="left1" >
                       <div className="left1-img">
                           <h3 className="left1-title">
                               <span>Featured Products</span>
                           </h3>
                       </div>
                   </div>
                   <div className="left22">
                       <img src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"></img>
                   
                      <div className="left2-content">
                          <h3>Cupcake chocolate </h3>
                           <span>$ 3.5</span>
                      </div>
                   </div>
                   <div className="left22">
                       <img src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"></img>
                   
                      <div className="left2-content">
                          <h3>Cupcake chocolate </h3>
                           <span>$ 3.5</span>
                      </div>
                   </div>
                   
                   <div className="left22">
                       <img src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"></img>
                   
                      <div className="left2-content">
                          <h3>Cupcake chocolate </h3>
                           <span>$ 3.5</span>
                      </div>
                   </div>
                   
                         
                    </div>
          
                <div className='product-right'>
                    <div className="product">
                    <Row>
                        { 
                            props.dt.map((pro) => (
                            <Col sm="4" >
                                <Card body>
                                <div className="container" style={{position:'relative', width:'100%'}}>
                                <img src={pro.images[0]?.imgimg} alt="Avatar" className="image" style={{width:'100%'}}></img>
                                        <div class="middle">
                                            <Link to={'/details/id='+pro._id}><button className="text">Click to see details</button></Link>
                                        </div>
                                        <CardText style={{display: 'flex', justifyContent: 'center', color: "#c69c6d", fontSize:14}}>{pro.price}$</CardText>
                                        <CardTitle style={{color:'#614430', fontSize: 15 }} tag="h6">{pro.name}</CardTitle>
                                </div>
                                        <div class="foodter">
                                        <Link to={'/details/id='+pro._id}><button className='add'>ADD</button></Link>
                                        </div>
                               
                                </Card>
                            </Col>
                            ))
                       }
     
                    </Row>
                    </div>
                </div>
            </div>           
        
        </div>
    )
}
