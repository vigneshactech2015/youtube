import React,{useState} from "react";
import axios from 'axios';

const Ollama = () => {
    const[text,setText] = useState("")
    const[result,setResult] = useState("")
    const[loading,setLoading] = useState(false)

    const onhandleText = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        setLoading(true)
        try{
            e.preventDefault()
            const payload = {
                model : "gemma:2b",
                prompt:text,
                stream:false
            }
            const response = await axios.post('http://localhost:11434/api/generate',payload)
            console.log(response)
            if(response.status === 200){
                setResult(response.data.response)
                setLoading(false)
            }
           
            }
        catch(error){
            setLoading(false)
            console.log(error)
        }
       
    }


    return(
        <div className="langchain-container">
        <form onSubmit={onSubmitHandler}>
        <input type="text" value={text} onChange={onhandleText} className="inputbox" placeholder="Enter the text for conversion"/>
        <button type="submit">Generate</button>
        </form>
       {!loading && result.length>=1 && <div className="response">
        <p>{result}</p>
        </div> }
        {loading && <p>Response is Loading. Please be patient!</p>}
        </div>
    )
}

export default Ollama