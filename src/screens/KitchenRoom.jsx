import React from "react";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

export default function KitchenRoom() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Timer />
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("/assets/kitchen-bg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSection: {
    marginBottom: "2rem",
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
    marginTop: 0,
  },
  course: {
    fontSize: "1rem",
    fontWeight: "400",
    marginTop: "1rem",
  },
  buttonContainer: {
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
    fontFamily: "'Inria Sans', sans-serif",
  },
};
