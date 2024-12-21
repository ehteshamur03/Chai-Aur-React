import './App.css'
import Card from './components/Cards'

function App() {
  // let obj = {
  //   username: "ehteshamur03",
  //   age: "21",
  //   password: "Password@12"
  // }
  // let myarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>TailWind Test</h1>
      <Card username="ehteshamur03" btnText="Click me"/>
      <Card username="Chai Aur Code" btnText="visit me"/>
    </>


  )
}

export default App
