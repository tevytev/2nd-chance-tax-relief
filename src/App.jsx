import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import './App.css'

function App() {

  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === '/') navigate('/home')

    return () => {};
  }, [pathname]);
  return (
    <>
    <Routes>
      <Route path='/' element={<Root/>}>
        <Route path='/home' element={<Home/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
