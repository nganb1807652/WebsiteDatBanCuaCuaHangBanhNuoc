
import React from 'react'
import swal from 'sweetalert';
import '../css/details.css'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Details(props) {
    console.log(props);
    const {
        buttonLabel,
        className
      } = props;

    const [data, setData]=React.useState({})
    const [img , setImg] = React.useState("")
    const [modal, setModal] = React.useState(false);
    const [num, setNum] = React.useState("");
    
    const addProduct = () => {
        setModal(!modal)
        let num = Number(document.getElementsByClassName("btn-middle")[0].value)
        setNum(num)
    

        const id = cookies.get('id');
        // const id = props.match.params.id;
        // console.log(num);
        const obj = {
            dataAPI: data,
            userId : id,
            num : num,
            // date : new Date(),
            
        } 
        if (!id) {
            window.location.href = "/login"
        }else{
           
            axios.post('http://localhost:8080/cart',obj)
            
        }
        

    }

    const getData = ()=>{
        axios.get("http://localhost:8080/datadetails/id="+props.match.params.id)
        .then(dt=>{
             // console.log(dt);
            setImg(dt.data.images[0].imgimg)
           
            setData(dt.data);
        })
    
    }
    const numberPlus = () => {
        let plus = document.getElementById("abc");
        
        plus.value = parseInt(plus.value) + 1;
 
    }
    const numberMinus = () => {
        let minus = document.getElementById("abc");
        if( parseInt(minus.value) >0 ){
            minus.value = parseInt(minus.value) - 1;
        }
        
    }
    
    React.useEffect(() => {
        getData()

    }, [])
    
    return (
      
        <div>
            <div style={{marginTop:'120px'}}></div>
           <div className="link-page1">
                <ul>
                   <li>Home</li>
                   <li>&nbsp; / &nbsp;</li>
                   <li>Product</li>
                   <li>&nbsp; / &nbsp;</li>
                   <li>{data.name}</li>
                </ul>
                <ul>
                    <div className="border-product1"></div>
                </ul> 
           </div>  
           <div className="wrap">
               <div className="wrap-left">
                   <div className="wrapImg">
                       <img src={img}/>
                   </div>
               </div>

               <div className="wrap-right">
                   <div className="wrap-right-name">
                       <h3>{data.name}</h3>
                   </div>
                   <div className="wrap-right-price" >
                       <h3> 
                           {data.price}$
                       </h3>
                      
                   </div>
                 
                   <div className="wrap-right-description" >
                       <h3>DESCRIPTION: 
                        <p style={{color:'black', paddingLeft: 10, textTransform:'none'}}>{data.description}</p>
                       </h3>
                   </div>
                    <div className="wrap-right-quantity" >
                        <h3 >QUANTITY: </h3>
                       <div className="btn-quantum">
                           <div> 
                               <button className='btn-minus' onClick={numberMinus}>-</button>
                           </div>
                           <div>
                               <input  value="1" className='btn-middle' id="abc"/>
                           </div>
                           <div>
                           <button className='btn-plus' onClick={numberPlus}>+</button>
                           </div>
                       </div>
                   </div>
                   <div className="wrap-right-add" >
                            {/* <Button color="danger" onClick={addProduct}>ADD</Button> */}
                            <Button color="danger" onClick={addProduct}>ADD</Button>
                            <Modal isOpen={modal}  className={className}>
                            <ModalHeader >ADDED TO CART</ModalHeader>
                           
                            <ModalBody>
                            <div style={{display:'flex', alignItems:'center',marginLeft:30}}>
                                <img  src={img} style={{ width:'100px', height:'100px' }}/>
                                <div>

                                    <div style={{ display:'flex'}}>
                                        <h5 style={{textAlign:'center'}}>{data.name}</h5>
                                        <h5 style={{paddingLeft: 10 }}>x{num}</h5>
                                    </div>
                                        <div style={{display:'flex' , alignItems:'center'}}>
                                            <p style={{fontSize:16 , fontWeight:'bold'}}>Total: </p>
                                            {/* <h5>{Number(data.price.slice(0,1))}</h5> */}
                                            <p style={{paddingLeft: 10 , fontSize: 14}}>{Number(num*data.price)}$</p> 
                                        </div>
                                    </div>
                                </div>

                        
                            
                            </ModalBody>
                            <ModalFooter>
                            {/* <Link to={'/menu'}><Button color="danger" >See more products</Button></Link> */}
                            <Link to ={'/cart'} ><Button color='danger' >Go to cart</Button> </Link>
                            <Button color="secondary" onClick={()=>setModal(!modal)}>Cancel</Button>

                            
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
           </div>
        
        </div>
       
    )
}
