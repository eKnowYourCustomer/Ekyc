import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Ekyc from './pages/Ekyc';
import KanbanBoard from "./pages/KanbanBoard"
import Base from "./components/Base"

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/board" element={<KanbanBoard/>}/>
          <Route path="/ekyc" element={<Ekyc/>}/>
        </Routes>
      </Base>
    </BrowserRouter>
  );
}

export default App;
