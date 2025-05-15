export default function StoryScene({ scene, onNext }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>{scene.title}</h2>
      <p>{scene.text}</p>
      <button onClick={onNext}>Continue</button>
    </div>
  );
}
