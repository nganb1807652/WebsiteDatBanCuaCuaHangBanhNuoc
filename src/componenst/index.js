// // index.component.js

// import React, {Component} from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
// import {Link} from 'react-router-dom'

// export default class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             persons: []
//         };
//         this.deleteBussiness = this.deleteBussiness.bind(this)
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8080/persons')
//             .then(response => {
//                 console.log(response.data);
//                 this.setState({persons: response.data});
//             })
          
//     }
//     deleteBussiness (id) {
//         // console.log("id la: " + id);
//         axios.post("http://localhost:8080/deletePersons" , {id})
//         .then(dt=>{
//             // console.log(dt.data);
//             if(dt.data == 'OK'){
//                 swal({
//                     title: "Xoá thành viên thành công!",
//                     // text: "OK!",
//                     icon: "success",
                    
//                   });
//                   window.location.href= "http://localhost:3000/index";
//             }
            
              
//         })

//     }
    


//     render() {
//         return (
//             <div>
//                 <h3 align="center">Persons List</h3>
//                 <table className="table table-striped" style={{marginTop: 30}}>
//                     <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Company</th>
//                         <th>Age</th>
//                         <th colSpan="2">Action</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.persons.map((data , index)=>(
//                         <tr key={index}>
//                             <td>
//                                 {data.name}
//                             </td>
//                             <td>
//                                 {data.company}
//                             </td>
//                             <td>
//                                 {data.age}
//                             </td>
//                             <td>
//                                 <Link to={"/edit/"+data._id}><button className="btn btn-primary"  >Edit</button></Link>
                                
//                             </td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={()=>this.deleteBussiness(data._id)}>Delete</button>
//                             </td>
//                         </tr>
//                             ))
//                         }
                    
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }