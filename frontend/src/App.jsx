// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TherapySession from './pages/TherapySession';
import MusicLibrary from './pages/MusicLibrary';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Questionnaire from './pages/Questionnaire';
import Logout from './components/Auth/Logout';
import Therapists from './pages/Therapists';
import TherapyJourney from './pages/TherapyJourney';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/therapy/:id' element={<TherapySession />} />
        <Route path='/therapy' element={<TherapySession />} />
        <Route path='/music-library' element={<MusicLibrary />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/questionnaire' element={<Questionnaire />} />
        <Route path='/therapists' element={<Therapists />} />
        <Route path='/therapy-journey' element={<TherapyJourney />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
