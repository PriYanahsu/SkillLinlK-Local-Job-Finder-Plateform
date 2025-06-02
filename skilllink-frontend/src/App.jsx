import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Registration from './pages/Registration'
import Login from './pages/Login'
import CustomerHome from './pages/Customer/CustomerHome'
import LiveLocation from './pages/Customer/LiveLocation'
import CustomerNeed from './pages/Customer/CustomerNeed'

import JobseekersHome from './pages/JobSeeker/JobseekersHome'
import UpdateProfiles from './pages/JobSeeker/UpdateProfiles'
import ViewOpportunities from './pages/JobSeeker/ViewOpportunities'
import TrainingResources from './pages/JobSeeker/TrainingResources'
import ServiceAvailable from './pages/Customer/ServiceAvailable'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>

        <Route path="/customer-home" element={<CustomerHome />}></Route>
        <Route path="/service/:serviceName" element={<ServiceAvailable />}></Route>
        <Route path="/location-live" element={<LiveLocation />}></Route>
        <Route path="/customer-need" element={<CustomerNeed/>}></Route>

        <Route path="/jobseeker-home" element={<JobseekersHome />}></Route>
        <Route path="/update-jobseeker-profile" element={<UpdateProfiles />}></Route>
        <Route path="/view-opportunities" element={<ViewOpportunities/>}></Route>
        <Route path="/training-resources" element={<TrainingResources />}></Route>

      </Routes>
    </Router>
  )
}

export default App
