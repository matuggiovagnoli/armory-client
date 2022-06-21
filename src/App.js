import React from 'react';
import CreateNewAccount from './Components/CreateNewAccount/CreateNewAccount';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Ammo from './pages/Ammo'
import FireArms from './pages/FireArms'
import Optics from './pages/Optics'
import Knives from './pages/Knives'
import Training from './pages/Training'
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/User/register' element = {<CreateNewAccount/>}/>
        <Route path='/FireArms' element = {<FireArms/>}/>
        <Route path='/Ammo' element = {<Ammo/>}/>
        <Route path='/Optics' element = {<Optics/>}/>
        <Route path='/Knives' element = {<Knives/>}/>
        <Route path='/Training' element = {<Training/>}/>
        <Route path='/User' element = {<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
