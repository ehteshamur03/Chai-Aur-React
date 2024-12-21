import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number_allowed, setNumber_Allowed] = useState(false)
  const [character_allowed, setCharacter_Allowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null,)

  const password_generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnnopqrstuvwxyz"

    if (number_allowed) {
      str += "0123456789"
    }
    if (character_allowed) {
      str += "!@#$%^&*()_+-=[];',./{}|:"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number_allowed, character_allowed, setPassword])

  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    password_generator()
  }, [length, number_allowed, character_allowed, password_generator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='w-full py-3 px-1 outline-none' placeholder='password' readOnly ref={passwordRef} />
          <button className='py-3 px-5 text-white outline-none bg-blue-700 shrink-0' onClick={copytoClipboard} >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={30} value={length} className='cursor-pointer' onChange={(event) => {
              setLength(event.target.value)
            }} /> <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number_allowed}
              onChange={() => { setNumber_Allowed((prev) => !prev) }} /> <label>Number</label> </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={character_allowed}
              onChange={() => { setCharacter_Allowed((prev) => !prev) }} />Character</div>
        </div>
      </div>

    </>
  )
}

export default App
