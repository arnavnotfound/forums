import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateThreadPage from './pages/CreateThreadPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-thread" element={<CreateThreadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
