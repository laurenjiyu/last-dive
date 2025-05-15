import { useState } from "react";
import Popup from "./Popup";

export default function PuzzleScene({ scene, onComplete }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>{scene.title}</h2>
      <p>{scene.instructions}</p>
      <button onClick={() => setShowHint(true)}>Hint</button>
      <button onClick={onComplete}>Solve</button>
      {showHint && <Popup onClose={() => setShowHint(false)}>{scene.hint}</Popup>}
    </div>
  );
}
