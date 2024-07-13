import {useState} from "react";
import axios from 'axios';
import {url} from '../constants'

const useCrud = () => {
    const [data,setData] = useState([])

    const getItems = () => {
        axios(url).then((data)=>setData(data.data)).catch((err)=>console.log(err))
    }

    const createItem = (e,name) => {
        e.preventDefault()
        axios.post(url,{name:name}).then(()=>getItems()).catch((err)=>console.log(err))
    }

    const deleteHandler = (e,todo) => {
        const {id} = todo
        axios.delete(`${url}/${id}`).then(()=>getItems()).catch((err)=>console.log(err))

    }
    
    const values = {
        getItems,
        data,
        createItem,
        deleteHandler
    }
    return values
}

export default useCrud;

