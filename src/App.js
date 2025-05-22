import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./screens/StartScreen";
import Exposition from "./screens/Exposition";
import KitchenRoom from "./screens/KitchenRoom";
import GameContainer from "./components/GameContainer";
import Congrats from './screens/Congrats';

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
          path="/exposition"
          element={
            <GameContainer>
              <Exposition />
            </GameContainer>
          }
        />
        <Route
          path="/kitchen-room"
          element={
            <GameContainer>
              <KitchenRoom />
            </GameContainer>
          }
        />
        <Route path="/congrats" element={<GameContainer><Congrats /></GameContainer>} />
      </Routes>
    </Router>
  );
}

export default App;
