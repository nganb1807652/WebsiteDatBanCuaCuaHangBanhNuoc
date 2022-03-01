import React, {useState} from 'react'
import '../css/reservations.css'
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import tableBlock from '../img/tableblock.png'
import table from '../img/table.png'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import swal  from 'sweetalert';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import react from 'react';
export default function Reservations() {
    const [selectedDate, setSelectedDate] = useState("")
    // console.log(selectedDate);
    const [time, setTime] = useState("");
    const [data , setData] = React.useState([])
    const [dataFilter, setDataFilter] = React.useState([])
    // let stt = 1
    
    const checkDate = async () => {
        autoLoadTable()
        console.log(data);
        const newData = data.filter(item =>{
            let newItem = item.dataTable.filter(x => x.date == selectedDate.getDate())
            if(time != ""){
                newItem = newItem.filter(x => x.time == time)
            }
            return !newItem.length
      
        })
        console.log(newData);
        setDataFilter(newData)
        
        
    }
    const autoLoadTable = async () => {
        await axios.post("http://localhost:8080/datatables")
        .then(dt=>{
            setData(dt.data);
            // setDataFilter(dt.data)
        })
    }
  
    const getID = async (id) =>{
        var dataCart = JSON.parse(localStorage.getItem('name'));
      
        let dataTime = {
            dataCheckOut: dataCart,
            idTable : id,
            date: selectedDate.getDate(),
            time: time
        }
        if(!dataTime.date || !dataTime.time ){
            swal({
                title: "Warning!!",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        }else{
            swal({
                // title: "Are you sure?",
                text: "Please confirm your reservation!!!",
                buttons: true,
            
              })
              .then( async (a) => {
                if (a) {
                    await axios.post("http://localhost:8080/checkout", dataTime)
                    .then(dt=>{
                        // console.log(dt.data);
                        if(dt.data !=null){
                            // window.location.href="/checkout";
                            swal("Confirmation of successful booking", {
                                icon: "success",
                
                              });
                        }
                    })
                  
                } else {
                  swal("Thank you!");
                }
              });
        }
       
    }
    // console.log(data);
    React.useEffect(()=>{
       
    },[])
   
     return (
        <div className= 'reservations-wrap' >
            <div style={{marginTop: '130px'}}></div>
            <div>
                <h4>RESERVATIONS</h4>
            </div>
           <div>
               <p className="text"> Booking a table has never been so easy with free and online restaurant reservations, booking now!!</p>
           </div>
                <div className='reservations-middle'>
                    <div className='reservations-middle-left'>
                        <div><h6 className='rr'>Please select date & time</h6></div>
                         <div className='date'>
                               <h6>DATE</h6>
                               <div className='option-date'>
                            
                            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                            minDate={new Date()} />
                                </div>
                               
                            </div>
                            <div className='time'>
                               <h6>TIME</h6>
                               <div>
                                    <TimePicker
                                        onChange={setTime}
                                        value={time} disableClock={true} clearIcon={"Clear"}/>
                                     </div>
                           </div>
                            <div className='room'>
                            
                               <h6></h6>
                               <div style={{marginLeft:'35px'}}>
                                <Button className='btn-time' color="danger" onClick={checkDate}>Check</Button>
                                
                               </div>
                            </div>


                    </div>
                    <div className='reservations-middle-right'>
                        <div className="table">
                        <Row>
                            {
                                dataFilter.map((item,index) => (
                                <Col sm="4" key={index}>
                                    <Card body style={{ border:'none'}}>
                                    <span style={{textAlign: 'center'}}></span>
                                    {
                                        item.status == true ? 
                                        <Button style={{background:'none', border: 'none'}} onClick={()=>getID(item.idTable)} ><img src={table} /> </Button> : <button style={{background:'none', border:'none'}}><img src={tableBlock} style={{cursor:'no-drop', opacity: '0.4'}}/></button>
                                    }
                                    
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
