import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const[val,setCounter] = useState(10);


  
  return (
    <>
      <h1>counter value {val} </h1>
      <button onClick = {()=>{
        if(val<20){
        setCounter(val+1)}
        }}>Increase</button>
      <button onClick={() => setCounter(val-1)}>Decrease</button>
    </>
  )
}

export default App
