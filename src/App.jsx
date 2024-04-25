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
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
   <Routes>
    <Route exact path="/" element = {<Header />} />
   </Routes>
  )
}

export default App
