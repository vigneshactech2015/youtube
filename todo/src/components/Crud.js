import {useState,useEffect} from "react";
import axios from 'axios';
import {url} from '../constants'

const Crud = () => {
    const[item,setItem] = useState([])
    const[name,setName] = useState("")

    // it will be run only at the mounting stage of component
    useEffect(()=>{
        getItems()
    },[])

    const getItems = () => {
        axios(url).then((data)=>setItem(data.data)).catch((err)=>console.log(err))
    }

    const createItem = (e) => {
        e.preventDefault()
        axios.post(url,{name:name}).then(()=>getItems()).catch((err)=>console.log(err))
        setName("")
    }

    const deleteHandler = (e,todo) => {
        const {id} = todo
        axios.delete(`${url}/${id}`).then(()=>getItems()).catch((err)=>console.log(err))

    }
    
    return(
        <div>
        <form onSubmit={createItem}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter todo item"/> &nbsp;
        <button type="submit">Submit</button><br/><br/>
        </form>
        {item.map((todos)=>{
            return (
                <div style={{display:"flex",gap:"10%",marginLeft:"40%"}}>
                <p>{todos.name}</p>
                <button onClick={(e)=>deleteHandler(e,todos)}>Delete</button>
                </div>
            )
        })}
        </div>
    )
    
}

export default Crud