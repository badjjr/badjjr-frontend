import './App.css';
import React from 'react';
import Home from './Components/Home';
import Categories from './Components/Categories';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>
        <Link to='/'><img src="public/badger.png" alt="Badger Icon" /></Link>
      </h1>
      <main>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/categories' element = { <Categories /> } />
        </Routes>
      </main>
    </>
  )
}

export default App;
