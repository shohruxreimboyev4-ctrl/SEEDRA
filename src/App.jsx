import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Leadue from './components/Leadue'
import HomePage from './pages/HomePage'
import AboutPages from './pages/AboutPages'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Leadue/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPages/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App