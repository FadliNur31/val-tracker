import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'

function App() {
  const [mmr, setMmr] = useState(null)
  return (
    <>
     <Navbar></Navbar>
    </>
  )
}

export default App
