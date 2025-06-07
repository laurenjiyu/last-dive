import React, { useState, useEffect, useRef } from "react";
import { colors } from "../theme";
import { useNavigate } from "react-router-dom";
import {
  expositionImages,
  expositionSounds,
  expositionMusic,
} from "../asset-links.js";

export default function Exposition() {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [background, setBackground] = useState(
    `url("${expositionImages.exposition}")`
  );
  const [showAlert, setShowAlert] = useState(false);
  const [showVillain, setShowVillain] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  const texts = [
    "You've won an all-expenses-paid trip aboard SeaGate, the world's most extravagant deep-sea luxury submarine cruise.",
    "It's been 5 long days of listening to tech bros brag about underwater startups and influencers livestreaming caviar mukbangs.",
    "You were counting the hours until you could leave. But now… something's wrong.",
    "Apparently this whole submarine was funded and designed by the absurdly wealthy tech CEO, Maverixx Flux. Besides submarines, he also sells shitty low-poly cars.",
    "Can't stand the guy, but he looooves to talk. How many rooms did he say this submarine had, again?",
    "A common area, a kitchen, a spa, a gym, an Instagram selfie studio, and a control room. Oh, and a single escape pod and about 20 lifeboats strapped to the sides of the vessel.",
    "Besides your lucky sweepstakes spot, he's also invited chef Rordan Gamsey, workout influencer Creatine Gaines, and model Donna Runnewaye, and Zark Muckerberg from the Social Network.",
    "All in all, pretty bad company. But none of them are here right now, so you can sit back and relax for a mome--- HUH?",
    "🚨🚨🚨⚠️ ALERT – PRESSURE BREACH DETECTED🚨🚨🚨",
    "🚨🚨🚨 ALERT\nSYSTEM OVERRIDE – 2:13 AM🚨🚨🚨",
    "“HELLOOOOOOO!!!\nIT'S ME —\nyour GLORIOUS, GENEROUS, and\napparently TOTALLY IGNORED host…",
    "S E A D O O R.\nFive. Days. You've all been down here\nsipping squid martinis and name-dropping space startups\nlike it's TEDxAtlantis \nand yet NOT ONE OF YOU remembered my....",
    "favorite podcast,\ntop ten amino acids, or\nmy LIMITED EDITION Fabergé scuba suit??",
    "So. Let's play a game. The escape pod is locked. I'm the only one who knows the code. And in 30 MINUTES, I'm leaving.\nAlone.",
    "Every room? A challenge. A love letter to me. Something you failed to care about. Solve them, or sink trying.",
    "YOU MIGHT HAVE SURVIVED THE PRESSURE.\nBUT YOU COULDN'T SURVIVE ME.",
    "Everyone is frantically running. You join them, until...\n\nYou see an open room",
  ];

  const handleNextClick = () => {
    switch (currentTextIndex) {
      case 0:
        setBackground(`url("${expositionImages.techbros}")`);
        setShowAlert(false);
        break;
      case 2:
        setBackground(`url("${expositionImages.dinner}")`);
        setShowAlert(false);
        break;
      case 4:
        setBackground(`url("${expositionImages.gym}")`);
        setShowAlert(false);
        break;
      case 5:
        setBackground(`url("${expositionImages.party}")`);
        setShowAlert(false);
        break;
      case 6:
        setBackground(`url("${expositionImages.exposition}")`);
        setShowAlert(false);
        break;
      case 7:
        setBackground(`url("${expositionImages.redroom}")`);
        setShowAlert(true);
        break;
      case 8:
        setBackground(`url("${expositionImages.mayday}")`);
        setShowAlert(true);
        break;
      case 9:
        setBackground(`url("${expositionImages.villain}")`);
        setShowVillain(true);
        setShowAlert(false);
        break;
      case 15:
        setBackground(`url("${expositionImages.running}")`);
        setShowVillain(true);
        setShowAlert(false);
        break;
      case texts.length - 2:
        setBackground(`url("${expositionImages.redroom}")`);
        setBackground("none");
        setShowVillain(false);
        setShowAlert(false);
        break;
      default:
        break;
    }

    if (currentTextIndex < texts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      navigate("/kitchen-room");
    }
  };
  const audioRef = useRef(null);
  const musicRef = useRef(null);

  useEffect(() => {
    const audioMap = {
      0: expositionSounds.exposition1,
      1: expositionSounds.exposition2,
      2: expositionSounds.exposition3,
      3: expositionSounds.exposition4,
      4: expositionSounds.exposition5,
      5: expositionSounds.exposition6,
      6: expositionSounds.exposition7,
      7: expositionSounds.exposition8,
      8: expositionSounds.alert1,
      9: expositionSounds.alert2,
      10: expositionSounds.villain1,
      11: expositionSounds.villain2,
      12: expositionSounds.villain3,
      13: expositionSounds.villain4,
      14: expositionSounds.gameIntro,
      15: expositionSounds.gameThreat,
      16: expositionSounds.doorOpen,
    };

    const musicMap = {
      0: expositionMusic.intro,
      1: expositionMusic.intro,
      2: expositionMusic.intro,
      3: expositionMusic.intro,
      4: expositionMusic.intro,
      5: expositionMusic.intro,
      6: expositionMusic.intro,
      7: expositionMusic.intro,
      8: expositionMusic.siren,
      9: expositionMusic.siren,
      10: expositionMusic.villain,
      11: expositionMusic.villain,
      12: expositionMusic.villain,
      13: expositionMusic.villain,
    };

    const audioFile = audioMap[currentTextIndex];
    const musicFile = musicMap[currentTextIndex];

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (audioFile) {
      const audio = new Audio(audioFile);
      audioRef.current = audio;
      audio.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }

    if (musicFile) {
      if (!musicRef.current) {
        const music = new Audio(musicFile);
        music.loop = true;
        music.volume = 0.4;
        musicRef.current = music;
        music.play().catch((err) => {
          console.warn("Music playback failed:", err);
        });
      } else if (!musicRef.current.src.includes(musicFile)) {
        musicRef.current.pause();
        const newMusic = new Audio(musicFile);
        newMusic.loop = true;
        newMusic.volume = 0.4;
        musicRef.current = newMusic;
        newMusic.play().catch((err) => {
          console.warn("Music switch failed:", err);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      if (currentTextIndex === texts.length - 1) {
        if (musicRef.current) {
          musicRef.current.pause();
          musicRef.current = null;
        }
      } else if (musicRef.current && !musicFile) {
        musicRef.current.pause();
        musicRef.current = null;
      }
    };
  }, [currentTextIndex]);

  // Get the container style based on current state
  const getContainerStyle = () => {
    const baseStyle = {
      color: showBlackScreen ? "white" : "#0e1450",
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
      transition: "all 0.5s ease",
    };

    if (showBlackScreen) {
      return {
        ...baseStyle,
        backgroundColor: "black",
      };
    } else {
      return {
        ...baseStyle,
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
  };

  return (
    <div style={getContainerStyle()}>
      {showVillain && <h2 style={styles.villainTitle}>Maverixx Flux</h2>}

      <div
        style={{
          ...styles.textBox,
          backgroundColor: showBlackScreen
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(255, 255, 255, 0.9)",
        }}
      >
        {showAlert ? (
          <h3 style={styles.alertText}>{texts[currentTextIndex]}</h3>
        ) : showBlackScreen ? (
          <h3 style={styles.blackScreenText}>{texts[currentTextIndex]}</h3>
        ) : (
          <>
            {currentTextIndex < 11 && (
              <h3 style={styles.subtitle}>The SeaGate Sub</h3>
            )}
            <div style={styles.textContainer}>
              <p style={styles.text}>
                {texts[currentTextIndex].split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </>
        )}
      </div>

      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.nextButton,
            backgroundColor: showBlackScreen ? "white" : "#0e1450",
            color: showBlackScreen ? "black" : "white",
          }}
          onClick={handleNextClick}
        >
          {currentTextIndex < texts.length - 1 ? "Next →" : "Enter Kitchen →"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  villainTitle: {
    position: "absolute",
    top: "2rem",
    left: "7rem",
    fontSize: "3rem",
    fontWeight: "700",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
  textBox: {
    position: "absolute",
    bottom: "100px",
    left: "7rem",
    right: "7rem",
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
  alertText: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#ff0000",
    margin: 0,
    whiteSpace: "pre-line",
  },
  blackScreenText: {
    fontSize: "1.8rem",
    fontWeight: "400",
    color: "white",
    margin: 0,
    whiteSpace: "pre-line",
    textAlign: "center",
  },
  textContainer: {
    margin: 0,
  },
  text: {
    fontSize: "1.5rem",
    fontWeight: "300",
    margin: 0,
    lineHeight: "1.5",
    whiteSpace: "pre-line",
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
  },
};
