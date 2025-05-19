import React from "react";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        <h1 style={styles.title}>LAST DIVE</h1>
        <div style={styles.subtitleSection}>
          <p style={styles.subtitle}>
            a digital escape room by adi, anthony, lauren, nhu, maimuna, and
            yinlin
          </p>
          <p style={styles.course}>CS 247G</p>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.startButton} onClick={() => navigate("/game")}>
          Start →
        </button>
      </div>

      <img
        src="/assets/submarine.png"
        alt="Submarine"
        style={styles.submarine}
      />
    </div>
  );
}

// 🎨 Style definitions
const styles = {
  container: {
    backgroundColor: "#0e1450",
    color: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    textAlign: "left",
    fontFamily: "'Inria Sans', sans-serif",
    position: "relative",
    marginLeft: "7rem",
  },
  title: {
    fontSize: "9rem",
    fontWeight: "700",
    margin: 0,
  },
  subtitleSection: {
    textAlign: "right",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "300",
    marginTop: "0rem",
  },
  course: {
    fontSize: "1rem",
    fontWeight: "400",
    marginTop: "1rem",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
  },
  startButton: {
    fontSize: "2rem",
    fontWeight: "400",
    color: "white",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    marginRight: "7rem",
    fontFamily: "'Inria Sans', sans-serif",
  },
  submarine: {
    position: "absolute",
    right: "7rem",
    top: "7rem",
    width: "30rem",
    opacity: 0.5,
  },
};
