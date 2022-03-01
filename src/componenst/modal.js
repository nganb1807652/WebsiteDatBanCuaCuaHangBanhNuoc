// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import axios from 'axios';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const ModalExample = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

// //   const getData = ()=>{
// //     axios.get("http://localhost:8080/datacart/id="+props.data._id)
    

     
// //     }
// // React.useEffect(() => {
// // getData()   });

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   console.log(props.num);
//   // console.log(props.data.images[].imgimg);
//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>ADD</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>{props.data.name}</ModalHeader>
//         <ModalBody>
//           <div>
//           <img  src={props.iimmgg} style={{ width:'80px', height:'80px' }}/>
//           </div>
//           <div>
//             <h6 style={{textAlign:'center'}}>Added to cart</h6>
//             {/* <span class="material-icons-outlined">done</span> */}

//           </div>
          
//         </ModalBody>
//         <ModalFooter>
//           <Link to={'/menu'}><Button color="danger" onClick={toggle}>See more products</Button></Link>
//           <Link to ={'/cart/id='+props.data._id} ><Button color='danger' onClick={toggle}>Go to cart</Button> </Link>
          
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default ModalExample;