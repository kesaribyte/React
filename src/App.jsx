
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <h1 className ="bg-green-400 text-black text-4xl p-4 rounded-xl"> hi, Good Morning </h1>

    <>
    
    <h1>chai aur react {count}</h1>
    <p>test para</p>

   </>
  )
}

export default App
