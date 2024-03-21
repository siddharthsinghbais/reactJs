import { useState } from 'react'


function App() {
  
  const[color,setColor]=useState("orange")  
  return (
    <>
    <div className= ' justify-center fixed flex bg-black w-full h-screen  'style={{backgroundColor:color}}>
         <div className='  relative flex flex-wrap justify-center rounded-lg bg-white inset-y-2 content-center  h-10'>
         <button className=' flex-initial w-20 rounded-full m-3 p-y-2'
         style={{background:"red"}}
         onClick={()=>setColor("red")}
           >
          Red
         </button>
         <button className=' flex-initial w-20 rounded-xl m-3 p-y-2'
         style={{background:"Orange"}}
         onClick={()=>setColor("orange")}
           >
          Orange
         </button>
         <button className=' flex-initial w-20 rounded-xl m-3 p-y-2'
         style={{background:"green"}}
         onClick={()=>setColor("green")}
           >
          Green
         </button>
         <button className=' flex-initial w-20 rounded-xl m-3 p-y-2'
         style={{background:"cyan"}}
         onClick={()=>setColor("cyan")}
           >
          Cyan
         </button>
         <button className=' flex-initial w-20 rounded-xl m-3 p-y-2'
         style={{background:"yellow"}}
         onClick={()=>setColor("yellow")}
           >
          Yellow
         </button>
         
         </div>
    </div>
    </>
  )
}

export default App
