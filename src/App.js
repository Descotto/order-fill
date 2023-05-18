import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Order from './Order.js';
import Display from './Display.js';



function App() {
  const [order, setOrder] = useState();


  return (
    <div>
      <Router>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link active" to="/">Home</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Routes>
          <Route path='/' element={<Order setOrder={setOrder} />} />
          <Route path='/display' element={<Display order={order} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
