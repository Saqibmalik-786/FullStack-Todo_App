import { useState } from 'react'
import {Route,Router,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      
    </>
  )
}

export default App
