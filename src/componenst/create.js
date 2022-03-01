// import React, { Component } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
// export default class Create extends Component {
  
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             bussiness : '',
//             age : ''
            
//         };

//         // dinh nghia function
//         this.handleName = this.handleName.bind(this);
//         this.handleBussiness = this.handleBussiness.bind(this);
//         this.handleAge = this.handleAge.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

    
//     }
//     handleName(event) {
//         // console.log(event.target.value);
//         this.setState({name: event.target.value});
//     }
//     handleBussiness(event) {
//         this.setState({bussiness : event.target.value});
//     }
//     handleAge(event) {
//         // console.log(event.target.value)
//         this.setState({age: event.target.value});
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         // de tam du lieu vao Object
//         const obj = {
//             name1 : this.state.name,
//             bussiness1 : this.state.bussiness,
//             age1 : this.state.age
//         }
//         axios.post('http://localhost:8080/persons', obj).then(dt=>{
//             // alert("Them thanh vien thanh cong")
//             swal({
//                 title: "Thêm thành viên thành công!",
//                 // text: "OK!",
//                 icon: "success",
//               });
//         })
//          }
   
//       render() {
      
//         return (
//             <div style={{marginTop: 10}}>
//                 <h3>Add New Business</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label>Add Person Name:  </label>
//                         <input type= "text" className="form-control" value={this.state.name} onChange={this.handleName}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Add Business Name: </label>
//                         <input type="text" className="form-control" value={this.state.bussiness} onChange={this.handleBussiness}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Add GST Number: </label>
//                         <input type="text" className="form-control" value={this.state.age} onChange={this.handleAge}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Register Business" className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
        
//         )
//     }
//  }
