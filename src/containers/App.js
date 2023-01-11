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
import AddAddressPublisherPage from '../pages/publisher/AddAddressPublisherPage';
import AddPublisherPage from '../pages/publisher/AddPublisherPage';

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
        <Route path="/publisher/add/1" exact element={<ProtectedRouteEmployee><AddAddressPublisherPage /></ProtectedRouteEmployee>} />
        <Route path="/publisher/add/2/:idGotten" exact element={<ProtectedRouteEmployee><AddPublisherPage /></ProtectedRouteEmployee>} />
      </Routes>
    </div>
  );
}

export default App;
