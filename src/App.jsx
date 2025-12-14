import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <img src="/coronel_logo.png" alt="Coronel logo" width={200} />
      <h1>Coronel</h1>
      <p>Monitoramento de Saúde</p>
    </div>
    </>
  )
}

export default App
