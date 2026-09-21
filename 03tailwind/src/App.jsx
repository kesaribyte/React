import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black text-4xl p-4 rounded-xl">
        Hi, Good Morning
      </h1>

      <h1>Chai aur React {count}</h1>
      <p>Test para</p>
    </>
  )
}

export default App