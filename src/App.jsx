import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './api'
import Header from './header'
import style from './style.module.css'
import Items from './Items'
import Post_data from './learning_api/Post_data'
import Get_data from './learning_api/get_data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= {style.main}> 
     <Header />
     {/* <Get_data /> */}
     {/* <Items /> */}
     {/* <Content /> */}
      <Post_data />
      {/* <Api /> */}
    
      
    </div>
  )
}

export default App
