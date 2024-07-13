import {useState,useEffect} from "react";
import useCrud from "../hooks/useCrud";


const Crud = () => {
    const {data,createItem,deleteHandler,getItems} = useCrud()

    const[name,setName] = useState("")

    // it will be run only at the mounting stage of component
    useEffect(()=>{
        getItems()
    },[])

    
    
    return(
        <div>
        <form onSubmit={(e)=>createItem(e,name)}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter todo item"/> &nbsp;
        <button type="submit">Submit</button><br/><br/>
        </form>
        { data.length>=1 && data.map((todos)=>{
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