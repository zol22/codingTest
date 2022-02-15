import React from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Subscription from './components/Subscription';
import Register from './components/Register';

function App() {
  return (
    <Router>
          <div className="app_body">
            <Routes>
            <Route index path="/" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
              <Route path="/subscription" element={ <Subscription />} />
            </Routes>     
          </div>  
    </Router>
  );
}

export default App;
