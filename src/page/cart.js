import axios from 'axios'
import React from 'react'
import Cookies from 'universal-cookie';
import '../css/cart.css'
import {Link} from 'react-router-dom'
import swal  from 'sweetalert';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const cookies = new Cookies();
const id = cookies.get('id');

export default function Cart() {
  const [modal, setModal] = React.useState(false);

const [data, setData]=React.useState([]);
const [isButton, setIsButton]=React.useState(false);
const [dataCart, setDataCart]=React.useState([]);
const [code, setCode]=React.useState("");
const [discount, setDiscount]=React.useState("");
const [discountCode, setDiscountCode]=React.useState([]);
let total = 0;
let totalProduct = 0;
let dataTotal = data;
let totalAPI = 0
let stt = 0;
dataTotal.products?.map(dt=>{
    total += dt.price * dt.quantity;
    totalProduct += dt.quantity;
   });

   
    
    
    const getData = () =>{
      axios.post("http://localhost:8080/cartDetail",{id})
      .then(dt =>{
          // console.log(dt.data);
          setData(dt.data);
         
      })
    } 
    const deleteCart = (id) => {
      const idUser = cookies.get('id');

    const obj = {
        idUser : idUser,
        idProduct : id
    }
  
      axios.post('http://localhost:8080/deleteCart',obj)
      .then(dt=>{
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              window.location.href = "/cart"
              swal("Your product has been deleted!", {
                icon: "success",

              });
            } else {
              swal("Your product is safe!");
            }
          });
      });
    
 

    }
    const inputDiscount = (e) =>{
      const text = e.target.value;
      setCode(text.toUpperCase())
     

    }
    const saveCode = () =>{
      if(code){
        axios.post('http://localhost:8080/checkCode',{code})
        .then(dt=>{
          // console.log(dt.data);
          setDiscount(dt.data.price) // lay tien giam
        })
      }
    //  console.log(discount);

    }
    React.useEffect(()=>{
      getData()
    },[]);
   const checkOut = () => {
      // setIsButton(!isButton)

      if(data){
        swal({
            title: "Revervation?",
            text: "Do you want make a reservation ",
            buttons: true,
            dangerMode: true,
          }).then((a) => {
              if (a) {
                if (localStorage) {
                  localStorage.setItem ('name', JSON.stringify(data));
                  window.location.href = '/reservations'
                } else {
                  // No support. Fallback here!
                }
                
              } else {
                // localStorage.setItem ('name', data);
                // window.location.href = "/checkout"
                }
              });
        }
   
      }
      const discoutCode = () =>{
        setModal(!modal)
        axios.get('http://localhost:8080/dataCode')
        .then(dt => {
          // console.log(dt);
          setDiscountCode(dt.data);
        })
      }
         console.log(discountCode); 
    return (
      
        <div>
          <div style={{marginTop: '100px'}}></div>
           <h4 className='head'>MY CART</h4>
              <div>
                <img style={{width:35, height:35, marginLeft: 20}} src='https://cdn-icons.flaticon.com/png/128/2178/premium/2178610.png?token=exp=1639480258~hmac=d15c539f85492e9214ba73e8839ffb95'/>
                <button style={{background: '#990000', borderRadius: 3,marginLeft: 10,color: 'white', border:1,borderEndEndRadius: 11, padding: 2}} onClick={discoutCode}>Discout Code</button>
                <Modal isOpen={modal} >
                            <ModalHeader>Copy Discount Code !!!</ModalHeader>
                            <ModalBody>
                            <table class="table table-striped">
        
            <thead>
            <tr>
                <th scope="col" style={{paddingRight: 50}}>#</th>
                <th scope="col" style={{paddingRight: 200}}>Discount</th>
                <th scope="col">CODE</th>
                
            </tr>
            </thead>
            <tbody>
            {
                discountCode.map((item)=>(
                    
                <tr>
                    <th scope="row">{stt+=1}</th>
                    <td style={{paddingRight: 200}}>{(item.price)*100} %</td>
                    <td>{item.codeDiscount}</td>
                   
                </tr>
                 )) 
            }
          
            
            
            </tbody>
    </table> 
                            </ModalBody>
                            <ModalFooter>
                            <Button color="secondary" onClick={()=>setModal(!modal)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
              </div>

              
           <div className="myCart" >
              
              <div className="myCart-left">
                  <table class="table" >
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      {
                      
                        data.products?.map((pro)=>(
                        
                        <tr>
                        
                            <td><img src={pro.images} style={{width: 60 , height: 60}}></img></td>
                            <td>{pro.name}</td>                         
                            <td>$ {pro.price}</td>
                            {/* <td>{pro.quantity}</td> */}
                            <td>
                              {pro.quantity}
                            </td>
                            <td>{(pro.price * pro.quantity)}</td>
                            
                            <td>
                              <button style={{background:'none', border:'none'}}  onClick={()=>deleteCart(pro._id)}>
                                <img src='https://cdn-icons-png.flaticon.com/128/1632/1632708.png' style={{width:10, height:10}}/>
                              </button>
                            </td>
                        </tr>
                          ))
                      }
                      
    
                    </tbody>
                  </table>
          </div>
          <div className='myCart-right'>
                  <div className='myCart-total'>
                    <h6> ORDER SUMMARY</h6>
                      <div style={{display:'flex', paddingTop: 20}}>
                        <div>{totalProduct} Products</div>
                        <div className='total' style={{color: '#be1b28'}}>{total} $</div>
                      </div>
                      <div  style={{display:'flex',paddingTop: 20}}>
                        <div>Discount</div>
                        <div className='deliveryfree'>{discount? (total*discount) : 0}$</div>
                      </div>
                      <div  style={{display:'flex',paddingTop: 20}}>
                        <div>Delivery</div>
                        <div className='deliveryfree'>Free</div>
                      </div>
                     
                      <div style={{paddingTop: 20}}><h1 style={{margin:0}}>TOTAL: {totalAPI = discount? (total-(total*discount)) : total } $</h1></div>
                      <div style={{paddingTop: 7}}><p className='vat'  style={{margin:0}}>(VAT included)</p></div>
                      <div style={{display: 'flex', marginTop:10}}>
                        <input type='text' onChange={inputDiscount} placeholder='Enter your discount code...'/>
                        <button onClick={saveCode} style={{background:'black', color: 'white', border: '1px', width: 80}} >Enter</button>
                      </div>
                      <div  className='myCart-right-check' style={{marginTop:25, marginLeft:19 }}><Link to='#'><button onClick={checkOut} style={{  background: 'none', color: 'white', border: 'none', padding:14, width: 240}}>CHECKOUT</button></Link></div>

                  </div>
          </div>
            
      </div>
      </div>
    )}

  