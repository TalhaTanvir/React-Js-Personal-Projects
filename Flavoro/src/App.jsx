import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './Pages/Success'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<ProtectedRoute element={<Success/>} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App