import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import Exposition from './screens/Exposition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<Exposition />} />
      </Routes>
    </Router>
  );
}

export default App;
