import './App.css'
import Card from './components/card'

function App() {
  
  let myobject = {

    username: "omraje"

  }
  
  
  
  
  return (
    <>
      <h1 className="bg-green-300 text-black text-4xl p-4 rounded-xl mb-4">
        Hi, Good Morning
      </h1>

      <Card username= "omraje" btntext ="click me"/> 
      <Card username= "arjun"/>
    </>
  )
}

export default App