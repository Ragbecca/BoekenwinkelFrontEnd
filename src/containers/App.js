import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import LoginPage from '../pages/LoginPage';
import Testscreen from '../pages/temp/Testscreen'
import HomePage from '../pages/HomePage';
import * as apiCalls from '../api/apiCalls'
import TopBar from '../components/TopBar';
import { ProtectedRouteEmployee } from '../routes/ProtectedRouteEmployee';
import AddAddressPage from '../pages/AddAddressPage';

const actions = {
  postLogin: apiCalls.login
}

function App() {
  return (
    <div>
      <div className=''>
        <TopBar />
      </div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/homepage" exact element={<HomePage />} />
        <Route path="/test" exact element={<Testscreen />} />
        <Route path="/login" exact element={<LoginPage actions={actions} />} />
        <Route path="/test-login" exact element={<ProtectedRouteEmployee><Testscreen /></ProtectedRouteEmployee>} />
        <Route path="/address/add" exact element={<ProtectedRouteEmployee><AddAddressPage /></ProtectedRouteEmployee>} />
      </Routes>
    </div>
  );
}

export default App;
