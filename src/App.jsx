import React from 'react'
import Index from './Component/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addincome from './Component/Addincome'
import Addexpense from '../Addexpense'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/income' element={<Addincome />}/>
        <Route path='/expense' element={<Addexpense />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App