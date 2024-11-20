import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ShowallExpense from './components/ShowallExpense'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="w-full h-full">
    
   
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/" element={<ShowallExpense />}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App
