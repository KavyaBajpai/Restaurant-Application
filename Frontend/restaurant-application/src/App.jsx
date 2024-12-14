import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Success from './pages/Success'

const App = () => {
 

  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
}

export default App
