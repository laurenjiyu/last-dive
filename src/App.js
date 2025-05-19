import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import Exposition from './screens/Exposition';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <GameContainer>
              <StartScreen />
            </GameContainer>
          }
        />
        <Route
          path="/game"
          element={
            <GameContainer>
              <Exposition />
            </GameContainer>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
