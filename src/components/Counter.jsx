import React from 'react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className='main'>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
