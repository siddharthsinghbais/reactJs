import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [count,setCounter]= useState(15)
//  let [disable,setdisable]=useState(true)
  // let count=15 
const  addValue =()=>{
   if(count<30)
    {// count++;
    setCounter(count+1)
    }
    else
    {
      document.querySelector('#add').disabled=true;
      alert("cannot increase")
    }
  }
const decrease=()=>{
     if(count<1)
     {
      alert("cannot decrease")
      
     }
     else
     {
      count--
   //console.log(count);
   setCounter(count)
     }
 }

  
  return (
    <>
    <h1 style={{color:"orange"}}>Jai Shree Ram </h1>
    <h2>count{count} </h2>
    <button onClick={addValue} id='add'>Add value :{count}</button>
    <br />
    <button onClick={decrease}>decrease value:{count}</button>
    </>
  )
}

export default App
