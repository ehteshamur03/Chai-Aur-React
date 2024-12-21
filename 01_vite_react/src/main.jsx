/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React!!!!!!</h1>
//     </div>
//   )
// }

// const AnotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )
const anotheruser = "Chai aur React"
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click on me to Visit google ',anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />,
    // MyApp(),
    // AnotherElement
    ReactElement

)
