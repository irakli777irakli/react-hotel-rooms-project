import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoomProvider } from './context';
// router -> routes > route this is react v6
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<RoomProvider >
  <Router>
    <App />
    </Router>
    </RoomProvider>
  
);


