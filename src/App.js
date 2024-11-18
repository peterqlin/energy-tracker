import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dayview from './components/Dayview';
import Weekview from './components/Weekview';
import './App.css';
import './styles/styles.css'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dayview' element={<Dayview />} />
          <Route path='/weekview' element={<Weekview />} />
        </Routes>
      </div>
    </>
  )
}

export default App;