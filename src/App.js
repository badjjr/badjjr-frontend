import './App.css';
import React from 'react';
import Home from './Components/Home';
import Create from './Components/Create';
import CategoriesList from './Components/CategoriesList';
import Categories from './Components/Categories';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>
        <Link to='/'><img src="" alt="Badger Icon" /></Link>
      </h1>
      <main>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/create' element = { <Create /> } /> 
          <Route path = '/categories' element = { <CategoriesList /> } />
          <Route path = '/categories/:category' element = { <Categories/> } />
        </Routes>
      </main>
    </>
  )
}

export default App;
