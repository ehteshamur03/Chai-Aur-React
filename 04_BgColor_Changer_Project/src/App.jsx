import { useState } from 'react'

function App() {
  let color = "white"
  const [colors, setColor] = useState(color)
  return (
    <div id="bg" className='w-full h-screen' style={{ backgroundColor: colors }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor("Red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "lavender" }} onClick={() => setColor("Lavender")}>Lavender</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Blue" }} onClick={() => setColor("Blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }} onClick={() => setColor("Olive")}>Olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>Grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "pink" }} onClick={() => setColor("Pink")}>Pink</button>
        </div>
      </div>
    </div >

  )
}


export default App
