import React from "react";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";

export default function Exposition() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>add exposition screens - adi</h2>

      <div style={styles.buttonContainer}>
        <button style={styles.startButton} onClick={() => navigate("/kitchen-room")}>
          temporary next button →
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    color: "#0e1450",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    fontFamily: "'Inria Sans', sans-serif",
    paddingLeft: "7rem",
    paddingRight: "7rem",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    margin: 0,
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "300",
    marginTop: 0,
    marginBottom: "2rem",
    maxWidth: "40rem",
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
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontFamily: "'Inria Sans', sans-serif",
  },
};