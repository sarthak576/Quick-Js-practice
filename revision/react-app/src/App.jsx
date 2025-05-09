import { useState } from 'react'
// ------------ State Example ---------
import child from './child'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>State Example </h2>
       <h4>Count: {count}</h4>
     <button onClick={()=>setCount(count+1)}>Inc</button>

     <button onClick={()=>setCount(count-1)}>Dec</button>
     <h2>📌 Props Example</h2>
   <h2> <child name="Sarthak" age={23} /></h2>
    </div>
  )
}

export default App
