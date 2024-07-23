import './App.css';
import {useState} from "react";


function App() {
  const[time,setTime] = useState({ms:0,s:0,m:0,h:0})
  const[inter,setInter] = useState()
  let updatedms = time.ms , updateds = time.s , updatedm = time.m ,updatedh = time.h

  const startHandler = () => {
    run()
    setInter(setInterval(run,10))
  }

  const run = () => {
    if(updatedms === 100){
      updatedms = 0
      updateds++
    }
    if(updateds === 60){
      updateds = 0
      updatedm++
    }
    if(updatedm === 60){
      updatedm = 0
      updatedh++
    }
    updatedms++
    setTime({ms:updatedms,s:updateds,m:updatedm,h:updatedh})
    }

    const resetHandler = () => {
      clearInterval(inter)
      setTime({ms:0,s:0,m:0,h:0})
    }

    const pauseHandler = () => {
      clearInterval(inter)
    }

   return(<div>
   <h1>Stop watch Tutorial !</h1>
   <h1>{time.h<=9 ? '0'+time.h : time.h}:{time.m<=9 ? '0'+time.m : time.m}:{time.s<=9 ? '0'+time.s : time.s}</h1>
    <div>
    <button onClick={startHandler}>Start</button>
    <button onClick={pauseHandler}>Pause</button>
    <button onClick={resetHandler}>Reset</button>
    </div>
    </div>)
}

export default App;
