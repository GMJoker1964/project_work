import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
