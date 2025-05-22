import React, { useState } from "react";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";

export default function Exposition() {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "",
    "You've won an all-expenses-paid trip aboard SeaGate, the world's most extravagant deep-sea luxury submarine cruise.",
    "It's been 5 long days of listening to tech bros brag about underwater startups and influencers livestreaming caviar mukbangs.",
    "You were counting the hours until you could leave.",
    "But now… something's wrong.",
    "Apparently this whole submarine was funded and designed by the absurdly wealthy tech CEO, Maverixx Flux. Besides submarines, he also sells shitty low-poly cars.",
    "Can't stand the guy, but he looooves to talk. How many rooms did he say this submarine had, again?",
    "A common area, a kitchen, a spa, a gym, an Instagram selfie studio, and a control room. Oh, and a single escape pod and about 20 lifeboats strapped to the sides of the vessel.",
    "Besides your lucky sweepstakes spot, he's also invited chef Rordan Gamsey, workout influencer Creatine Gaines, and model Donna Runnewaye, and Mark Zuckerberg from the Social Network.",
    "All in all, pretty bad company. But none of them are here right now, so you can sit back and relax for a mome--- HUH?",
  ];

  const handleNextClick = () => {
    if (currentTextIndex < texts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      navigate("/kitchen-room");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>add exposition screens - adi</h2>

      <div style={styles.textBox}>
        <h3 style={styles.subtitle}>The SeaGate Sub</h3>
        <div style={styles.textContainer}>
          <p style={styles.text}>{texts[currentTextIndex]}</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.nextButton} onClick={handleNextClick}>
          {currentTextIndex < texts.length - 1 ? "Next →" : "Skip to kitchen →"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("/assets/exposition.png")',
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
    position: "relative",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    margin: 0,
    marginBottom: "1rem",
  },
  textBox: {
    position: "absolute",
    bottom: "100px",
    left: "7rem",
    right: "7rem",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  subtitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    margin: "0 0 10px 0",
    color: "#0e1450",
  },
  textContainer: {
    margin: 0,
  },
  text: {
    fontSize: "1.5rem",
    fontWeight: "300",
    margin: 0,
    lineHeight: "1.5",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "40px",
    right: "7rem",
  },
  nextButton: {
    fontSize: "1.5rem",
    fontWeight: "400",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontFamily: "'Inria Sans', sans-serif",
    color: "white",
  },
};
