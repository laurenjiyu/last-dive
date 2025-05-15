import { useState } from "react";
import { scenes } from "../data/scenes";
import StoryScene from "./StoryScene";
import PuzzleScene from "./PuzzleScene";

export default function SceneManager() {
  const [index, setIndex] = useState(0);
  const scene = scenes[index];

  const goToNext = () => {
    if (index < scenes.length - 1) setIndex(index + 1);
  };

  return (
    <>
      {scene.type === "story" && <StoryScene scene={scene} onNext={goToNext} />}
      {scene.type === "puzzle" && <PuzzleScene scene={scene} onComplete={goToNext} />}
    </>
  );
}
