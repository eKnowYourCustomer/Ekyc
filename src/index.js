import React from 'react';
// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Base from "../src/components/Base";
import reportWebVitals from './reportWebVitals';

import Login from './pages/Login';
import Ekyc from './pages/Ekyc';
import {Provider} from "react-redux";
import {store} from "./state/store";
import ReduxTest from './pages/ReduxTest';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  
   <App /> 
    
   
);


reportWebVitals();
