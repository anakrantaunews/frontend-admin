import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}

export default App