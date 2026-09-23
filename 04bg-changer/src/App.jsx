import { useState } from "react"

function App() {
  const [color, setColor] = useState("orange")

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ background: color }}
    >
    

    <div 
    className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-2 py-2">

      <button className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "red"}}>Red

      </button>


      <button className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "green"}}>Red

      </button>


      <button className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "white"}}>Red

      </button> 



      <button className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "orange"}}>Red

      </button>

      <button className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "yellow"}}>Red

      </button>


      


        </div>
    </div>
    
    </div>
  )
}

export default App