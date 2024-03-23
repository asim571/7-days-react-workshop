import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  const name = "Asim"

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element= {<About/>}></Route>
      <Route path='/contact' element= {<Contact/>}></Route>
    </Routes>
   </Router>
  )
}

export default App