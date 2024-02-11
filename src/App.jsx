import { useState } from 'react'
import reactLogo from './assets/react.svg'
import navbar from './components/Navbar'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <navbar></navbar>
    </>
  )
}

export default App
