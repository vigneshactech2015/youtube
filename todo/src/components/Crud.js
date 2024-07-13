import {useState,useEffect} from "react";
import useCrud from "../hooks/useCrud";
import './crud.css';


const Crud = () => {
    const {data,createItem,deleteHandler,getItems} = useCrud()
    const[name,setName] = useState("")

    // it will be run only at the mounting stage of component
    useEffect(()=>{
        getItems()
    },[])

    return(
        <div className="todocontainer">
        <form onSubmit={(e)=>createItem(e,name)}>
        <input className="todoinput" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter todo item"/> &nbsp;
        <button className="submitbutton" type="submit">Submit</button><br/><br/>
        </form>
        { data.length>=1 && data.map((todos)=>{
            return (
                <div className="todoitemcontainer">
                <p>{todos.name}</p>
                <button className="deletebutton" onClick={(e)=>deleteHandler(e,todos)}><b>X</b></button>
                </div>
            )
        })}
        </div>
    )
    
}

export default Crud