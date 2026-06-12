import { useState } from 'react'
import './App.css'
import Documents from "./pages/Document";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
    <Documents/>

    </>
  )
}

export default App
