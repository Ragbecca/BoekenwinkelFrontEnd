import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Homescreen from '../pages/Homescreen'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homescreen />} />
      </Routes>
    </div>
  );
}

export default App;
