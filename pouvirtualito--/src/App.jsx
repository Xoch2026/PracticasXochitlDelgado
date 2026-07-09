import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import Contador from './Contador'
import TamagotchiPou from './TamagochiPou'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
      <TamagotchiPou/>
    </>
  )
}

export default App
