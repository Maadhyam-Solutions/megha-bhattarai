import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/navbar'
import Hero from './components/Herosection/hero'
import AboutAuthor from './components/AboutAuthor/abouthauthor'
import AboutBook from './components/AboutBook/aboutbook'
import Footer from './components/Footer/footer'



function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutBook />
      <AboutAuthor />
      <Footer/>
    </div>
  )
}

export default App
