import { useState } from 'react'
import home from './Pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='max-w-screen-md max-auto pt-20'>
        <home />
      </div>
        
  )
}

export default App
