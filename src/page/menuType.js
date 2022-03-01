import React from 'react'
import axios from 'axios';
import MenuLeft from '../componenst/menuLeft'
export default function ProductType(props) {
    const [data , setData] = React.useState([])
    
   console.log(props);

    const getData = () =>{
            axios.get("http://localhost:8080/datatype/type="+props.match.params.type) //lay chu cake/drink
            .then(dt => {
                setData(dt.data);
            }) 
    }
    React.useEffect(()=>{
        getData()
    },[props.match.params.type])
    
    return (
        <div>
            <MenuLeft dt={data} title={props.match.params.type}/>
            
        </div>
    )


    
}
