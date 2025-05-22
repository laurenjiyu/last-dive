import React, { useState } from "react";
import Timer from "../components/Timer";
import Padlock from '../components/Padlock';
import { useNavigate } from "react-router-dom";

export default function KitchenRoom() {
  const navigate = useNavigate();
  //for padlock
  const [lockOpen, setLockOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  //for the recipt book modal:
  const [modalOpen, setModalOpen] = useState(false);
  const [bookClicked, setBookClicked] = useState(false);
  const handleBookClick = () => {
    setModalOpen(true);
    setBookClicked(true);
  };
  // open padlock input
  const handlePadlockClick = () => setLockOpen(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [wordInputs, setWordInputs] = useState(["", "", "", "", ""]);

  const handleWordChange = (index, value) => {
    const newInputs = [...wordInputs];
    newInputs[index] = value.toLowerCase();
    setWordInputs(newInputs);
  };

  const correctWords = ["red", "velvet", "cupcake", "protein", "bar"];

  const checkWords = () => {
    const incorrectIndices = correctWords
      .map((word, i) => (wordInputs[i] !== word ? i : null))
      .filter((i) => i !== null);

    if (incorrectIndices.length === 0) {
      setFeedback("success");
    } else {
      const ordinalMap = ["first", "second", "third", "fourth", "fifth"];
      const incorrectOrdinals = incorrectIndices.map((i) => ordinalMap[i]);
      setFeedback(`incorrect:${incorrectOrdinals.join(", ")}`);
    }
  };

  return (
    <div style={styles.container}>
      <Timer />
      {/* ---------- Padlock Icon ---------- */}
      {!unlocked && (
        <button                                    // transparent button overlay
          style={styles.padlockButton}             //padlockButton style
          onClick={handlePadlockClick}             // click handler
          aria-label="Open padlock"
        >
          <img
            src="/assets/padlock-icon.png"
            alt="Padlocked Door"
            style={styles.padlockIcon}            //NEW padlockIcon style
          />
        </button>
      )}

      {/* ---------- Padlock Modal ---------- */}
      {lockOpen && !unlocked && (
        <Padlock
          correctCode="08251"                    //correct code prop
          onClose={() => setLockOpen(false)}       //onClose callback
          onSuccess={() => {                       //onSuccess callback
            setUnlocked(true);                     //hide padlock after unlock
            setLockOpen(false);
            // TODO: reveal door or navigate further
          }}
        />
      )}
      
      {/* Book Icon (whether it's found or not found) */}
      <img
        src={bookClicked ? "/assets/openbook.jpg" : "/assets/book.jpeg"}
        alt="book"
        onClick={handleBookClick}
        style={styles.bookStyle(bookClicked)}
      />

      {/* Recipe Book when clicked on */}
      {modalOpen && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src="/assets/openbook.jpg"
              alt="Open Book"
              style={styles.modalImage}
            />

            <div style={styles.inputContainer}>
              {correctWords.map((_, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Word ${i + 1}`}
                  value={wordInputs[i]}
                  onChange={(e) => handleWordChange(i, e.target.value)}
                  style={{ ...styles.input, marginBottom: "0.5rem" }}
                />
              ))}
            </div>

            <button onClick={checkWords} style={styles.submitButton}>
              Submit
            </button>

            {feedback === "success" && (
              <div style={styles.feedbackSuccess}>Success!</div>
            )}
            {feedback.startsWith("incorrect:") && (
              <div style={styles.feedbackClose}>
                Your <strong>{feedback.split(":")[1]}</strong> word
                {feedback.split(":")[1].includes(",") ? "s are" : " is"}{" "}
                incorrect.
              </div>
            )}

            <button onClick={handleCloseModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
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
  //Recipe Book (before clicked it's hidden, and when it's clicked, it at the top right):
  bookStyle: (bookClicked) => ({
    position: "absolute",
    top: bookClicked ? 20 : "60%",
    left: bookClicked ? "auto" : "50%",
    right: bookClicked ? 20 : "auto",
    transform: bookClicked ? "none" : "translate(-50%, -50%)",
    width: bookClicked ? 60 : 100,
    height: bookClicked ? 60 : 100,
    cursor: "pointer",
    zIndex: 2,
  }),
  //Recipe Book Modal
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  modalContent: {
    position: "relative",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  modalImage: {
    width: "800px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "10px",
    zIndex: 11,
  },
  inputContainer: {
    position: "absolute",
    top: "40%",
    zIndex: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "0.5rem",
  },

  //Recipe Book Modal input text for guesses
  input: {
    width: "100px",
    padding: "0.5rem",
    border: "4px solid #5E68F8",
    borderRadius: "5px",
  },

  feedbackSuccess: {
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "2rem",
    color: "#5E68F8",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    zIndex: 20,
  },

  feedbackClose: {
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "1.5rem",
    color: "#f44336",
    backgroundColor: "white",
    padding: "0.4rem 1rem",
    borderRadius: "10px",
    zIndex: 20,
  },

  submitButton: {
    position: "absolute",
    bottom: "20%",
    padding: "1rem 3rem",
    backgroundColor: "#5E68F8",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    zIndex: 12,
  },

  closeButton: {
    position: "absolute",
    bottom: "10%",
    padding: "0.4rem 1rem",
    backgroundColor: "#5E68F8",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    zIndex: 12,
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
  // >>> NEW: padlock icon style
  padlockIcon: {
    position: 'absolute',
    top: '35%',
    right: '15%',
    width: 60,
    height: 60,
    cursor: 'pointer',
    zIndex: 2
  },
  // >>> NEW: transparent overlay button for padlock
  padlockButton: {
    position: 'absolute',
    top: '60%',
    right: '10%',
    width: 100,
    height: 160,
    opacity: 0,
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    zIndex: 2,
  },
  // >>> NEW: size & display for padlock icon inside button
  padlockIcon: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
};
