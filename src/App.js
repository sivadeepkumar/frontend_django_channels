import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login'; // Make sure the import is correct (case-sensitive)
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Navigate from './Components/Navigate/Navigate';
import Sidebar from './Components/master/Sidebar';
import ChatArea from './Components/master/ChatArea';
import Home from "./Components/Home"
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/nagivate' Component={Navigate} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/register" Component={Registration} />
      <Route path='*' Component={NotFound}/>
    </Routes>
  </BrowserRouter>
);

export default App;



