import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import imagenNico from './assets/hero.jpg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Header titulo="Mi primera APP"/>
      <main className='grow container mx-auto p-10'>
        <div className='bg-white p-8 shadow-lg'>
          <p className='text-black'> Mostrar corazón de Nicolas </p>
          <h1> <img src={imagenNico} className="base" width="170" height="179" alt="" /> </h1>
        </div>
       <Sidebar/>
      </main>
    </div>
      <Footer/>
    </>
  )
}

export default App