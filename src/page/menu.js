import React from 'react'
import '../css/menu.css'
import axios from 'axios'
import MenuLeft from '../componenst/menuLeft'

export default function Menu(s) {
    const [data , setData] = React.useState([]);
    const getData = async() => {
        await axios.get("http://localhost:8080/data")
        .then(dt => {
            setData(dt.data);
        })
    }
    React.useEffect( () => {
        getData()
        // console.log(props.location.query.id);
    },[])
    // console.log(data);

    return (
        <div>
            <MenuLeft dt={data} />
        </div>
    )
}
