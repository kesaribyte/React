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
        

     
      <button onClick={() => setColor("red")}
      className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "red"}}>Red

      </button>


      <button onClick={() => setColor("green")}
      className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "green"}}>green

      </button>


      <button onClick={() => setColor("white")}
      className="outline-none rounded-full px-3 py-1 shadow-lg text-black"
      style={{backgroundColor: "white"}}>white

      </button> 



      <button onClick={() => setColor("orange")}
      className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "orange"}}>orange

      </button>

      <button onClick={() => setColor("yellow")}
       className="outline-none rounded-full px-3 py-1 shadow-lg text-white"
      style={{backgroundColor: "yellow"}}>yellow

      </button>


      


        </div>
    </div>
    
    </div>
  )
}

export default App