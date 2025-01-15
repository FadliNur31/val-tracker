import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { Main } from './components/main';

function App() {
  const [mmr, setMmr] = useState(null)
  return (
    <div className='max-w-screen-2xl'>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default App
