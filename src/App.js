import React from 'react';
import './App.css';

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Accounting from './Components/Accounting';
import Vendor from './Components/Vendor'
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/'element={<Accounting/>}  />
            <Route path='Vendor' element={<Vendor/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
