import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "normalize.css";
import Header from './Header';
import LoginPage from './LoginPage';
import Main from './Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
