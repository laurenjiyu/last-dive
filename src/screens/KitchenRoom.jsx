import React, { useState } from "react";
import Timer from "../components/Timer";
import Padlock from "../components/Padlock";
import Book from "../components/Book";
import { useNavigate } from "react-router-dom";

export default function KitchenRoom() {
  const navigate = useNavigate();
  const [lockOpen, setLockOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showChef, setShowChef] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showGameElements, setShowGameElements] = useState(false);
  const [showTextBox, setShowTextBox] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [showEnvelopeModal, setShowEnvelopeModal] = useState(false);

  const kitchenTexts = [
    "Damn this stupid submarine.. the only room you can get into is the adjacent kitchen",
    "Even though Maverixx Flux added way too much ambient lighting, it's still a nice kitchen. Or it would be a nice kitchen, if not for the.. emotive man who runs the place:",
    "World famous chef and media personality, Rordan Gamsey. He's almost as loud as his food is good, and his food is really good.",
    "Oi!",
    "This is absurd, innit?! That little brat is so spoiled...he's always asking me to make him his favorite 3 course meal but I can't recall what it is...\nWait, but you know it! Here's this envelope to let you get started.",
  ];
  console.log("Component updated");

  const handleNextClick = () => {
    if (currentTextIndex === 2) {
      setShowChef(true);
      setShowTitle(true);
    }

    if (currentTextIndex < kitchenTexts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setShowTextBox(false);
      setShowChef(false);
      setShowTitle(false);
      setShowEnvelopeModal(true);
    }
  };

  const handleBookClick = () => {
    setModalOpen(true);
  };

  const handlePadlockClick = () => setLockOpen(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!showGameElements) {
    return (
      <div style={styles.container}>
        {showChef && (
          <img
            src="/assets/chef.png"
            alt="Rordan Gamsey"
            style={styles.chefImage}
          />
        )}

        {showTextBox && (
          <div style={styles.textBox}>
            {showTitle && currentTextIndex === 3 ? (
              <h2 style={styles.chefTitle}>{kitchenTexts[currentTextIndex]}</h2>
            ) : (
              <p style={styles.text}>{kitchenTexts[currentTextIndex]}</p>
            )}
          </div>
        )}

        <div style={styles.buttonContainer}>
          <button style={styles.nextButton} onClick={handleNextClick}>
            {currentTextIndex < kitchenTexts.length - 1 ? "Next →" : "Begin →"}
          </button>
        </div>

        {showEnvelopeModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <p style={styles.modalText}>
                Look for the physical envelope that looks like this
              </p>
              <img
                src="/assets/envelope.jpg"
                alt="Envelope"
                style={styles.envelopeImage}
              />
              <button
                style={styles.closeModalButton}
                onClick={() => {
                  setShowEnvelopeModal(false);
                  setShowGameElements(true);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <Timer />
      {!unlocked && (
        <button
          style={styles.padlockButton}
          onClick={handlePadlockClick}
          aria-label="Open padlock"
        >
          <img
            src="/assets/padlock-icon.png"
            alt="Padlocked Door"
            style={styles.padlockIcon}
          />
        </button>
      )}

      {lockOpen && !unlocked && (
        <Padlock
          correctCode="08251"
          onClose={() => setLockOpen(false)}
          onSuccess={() => {
            setUnlocked(true);
            setLockOpen(false);
            navigate("/congrats");
          }}
        />
      )}

      <img
        src={"/assets/book.png"}
        alt="book"
        onClick={handleBookClick}
        style={styles.bookStyle}
      />

      <Book modalOpen={modalOpen} onClose={handleCloseModal} />
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
  textBox: {
    position: "absolute",
    bottom: "70px",
    left: "7rem",
    right: "7rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: "1.5rem",
    margin: 0,
    lineHeight: "1.5",
    whiteSpace: "pre-line",
  },
  chefTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: 0,
    color: "white",
    textTransform: "uppercase",
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
    backgroundColor: "#0e1450",
  },
  chefImage: {
    position: "absolute",
    right: "4rem",
    height: "70vh",
    bottom: "200px",
    zIndex: 1,
  },
  bookStyle: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 120,
    cursor: "pointer",
    zIndex: 2,
  },
  padlockIcon: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  padlockButton: {
    position: "absolute",
    top: "60%",
    right: "10%",
    width: 100,
    height: 160,
    opacity: 0,
    border: "none",
    padding: 0,
    cursor: "pointer",
    zIndex: 2,
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
  },
  modalText: {
    fontSize: "1.3rem",
    marginBottom: "20px",
  },
  envelopeImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  closeModalButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#333",
  },
};
