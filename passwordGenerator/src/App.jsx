import { useState , useCallback,useEffect ,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")
  const passwordRef= useRef(null)

// password logic and useCallback
const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed)str+="0123456789"
  if(charAllowed) str+="!@#$%^&*()_+~?"
  for (let i = 0; i < length; i++) {
    let char= Math.floor(Math.random()* str.length +1)
    console.log(`${char}`);
    pass+=str.charAt(char)
  }
  setPassword(pass)
} ,
  [length,numberAllowed,charAllowed,setPassword])

  // useEffect 
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  // copy and show selected copy text with the help of passwordRef and can also specify the range to select
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)//range for selection
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      
       <div className=' w-full max-w-md mx-auto my-8 px-4 py-4 shadow-md text-center rounded-lg text-orange-500  bg-gray-700'> 
       <h1 className='py-2'>Password Generator </h1>
           <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
           <input 
           type="text"
           value={password}
           readOnly
           ref={passwordRef}
           className=' w-full py-1 px-3 outline-none '
           placeholder='Password'
            />
            <button className=' w-20 bg-blue-600 rounded-r-lg hover:bg-blue-800 px-1 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500  text-white'
             onClick={(copyPasswordToClipboard)}
             >Copy</button>
           </div>
           <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1'>
              <input type="range" name="lenght" id="" 
              value={length}
              min={6} 
              max={100}
              className=' cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label > Length : {length}</label>
             </div>
             <div className='flex items-center gap-x-1'>
               <input type="checkbox" 
               defaultChecked={numberAllowed} 
               id="numberAllowed"
               onChange={()=>{
                setNumberAllowed((prev) => (!prev))
               }}
               />
               <label >Number</label>
               <input type="checkbox"
                defaultChecked={charAllowed}      
                 id="charAllowed"
                 onChange={()=>{
                  setCharAllowed((prev)=>(!prev))
                 }} />
               <label >Characters</label>
             </div>

           </div>
       </div>
    </>
  )
}

export default App
