import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=" text-5xl font-bold text-center text-purple-400">..</h1>
    <h1 className="text-3xl font-bold underline text-blue-800 text-center font-serif">Welcome to the App tailwindcss</h1>
    <h1 className="text-2xl font-semibold text-green-400 text-center font-serif">Count: {count}</h1>
    <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer  margin-left ml-80" onClick={() => setCount(count + 1)}>Increment</button><br/>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer margin-left ml-80 padding-right pl-3 margin-top mt-2  margin-bottom mb-2" onClick={() => setCount(count - 1)}>Decrement</button><br/>
    <button className=" bg-blue-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer margin-left ml-84.5 " onClick={() => setCount(0)}>Reset</button>
    
    </>
  ) 
}

export default App
