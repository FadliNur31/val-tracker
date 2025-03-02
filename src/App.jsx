import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { Main } from './components/main';

function App() {
  return (
    <div className='max-w-screen-2xl h-full mx-auto my-0'>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default App
