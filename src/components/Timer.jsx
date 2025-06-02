import React, { useEffect, useState } from "react";

export default function Timer({ initialSeconds = 1800, decrementTime }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [prevDecrement, setPrevDecrement] = useState(decrementTime);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Decrement time by 60 seconds when decrementTime increases
  useEffect(() => {
    if (decrementTime > prevDecrement) {
      setSecondsLeft((s) => Math.max(0, s - 60)); // don't go below 0
      setPrevDecrement(decrementTime);
    }
  }, [decrementTime, prevDecrement]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div style={styles.timer}>
      {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}

const styles = {
  timer: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "0 0 8px #5E68F8, 0 0 4px #5E68F8",
    padding: "0.5rem 1.5rem",
    position: "absolute",
    top: "2rem",
    fontFamily: "'Inria Sans', sans-serif",
    letterSpacing: "0.1em",
  },
};
