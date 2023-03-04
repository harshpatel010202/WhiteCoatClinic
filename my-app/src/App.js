import * as React from 'react';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
      
    </>
    
  );
}

export default App;