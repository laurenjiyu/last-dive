import React, { useState } from "react";
import Timer from "../components/Timer";
import Padlock from "../components/Padlock";
import { useNavigate } from "react-router-dom";

export default function KitchenRoom() {
  const navigate = useNavigate();
  //for padlock
  const [lockOpen, setLockOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showChef, setShowChef] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showGameElements, setShowGameElements] = useState(false);
  const [showTextBox, setShowTextBox] = useState(true); // New state for text box visibility

  const kitchenTexts = [
    "Damn this stupid submarine.. the only room you can get into is the adjacent kitchen",
    "Even though Maverixx Flux added way too much ambient lighting, it's still a nice kitchen. Or it would be a nice kitchen, if not for the.. emotive man who runs the place:",
    "World famous chef and media personality, Rordan Gamsey. He's almost as loud as his food is good, and his food is really good.",
    "Oi!",
    "This is absurd, innit?! That little brat is so spoiled...he's always asking me to make him his favorite 3 course meal but I can't recall what it is...",
  ];

  const handleNextClick = () => {
    if (currentTextIndex === 2) {
      setShowChef(true);
      setShowTitle(true);
    }

    if (currentTextIndex < kitchenTexts.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      // When we reach the last text and click next
      setShowChef(false);
      setShowTitle(false);
      setShowTextBox(false); // Hide the text box
      setShowGameElements(true); // Show game elements
    }
  };

  // Rest of your existing state and handlers for the recipe book
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
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Timer />
      {/* ---------- Padlock Icon ---------- */}
      {!unlocked && (
        <button // transparent button overlay
          style={styles.padlockButton} //padlockButton style
          onClick={handlePadlockClick} // click handler
          aria-label="Open padlock"
        >
          <img
            src="/assets/padlock-icon.png"
            alt="Padlocked Door"
            style={styles.padlockIcon} //NEW padlockIcon style
          />
        </button>
      )}

      {/* ---------- Padlock Modal ---------- */}
      {lockOpen && !unlocked && (
        <Padlock
          correctCode="08251" //correct code prop
          onClose={() => setLockOpen(false)} //onClose callback
          onSuccess={() => {
            //onSuccess callback
            setUnlocked(true); //hide padlock after unlock
            setLockOpen(false);
            navigate("/congrats");
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
            <div style={styles.recipeBook}>Recipe Book</div>
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

// ... (keep your existing styles object)

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
    bottom: "100px",
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
    right: "5rem",
    height: "60vh",
    bottom: "200px",
    zIndex: 1,
  },
  // Rest of your existing styles...
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
  input: {
    width: "100px",
    padding: "0.5rem",
    border: "4px solid #5E68F8",
    borderRadius: "5px",
  },
  recipeBook: {
    position: "absolute",
    top: 90,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "2rem",
    color: "#5E68F8",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
  },
  feedbackSuccess: {
    position: "absolute",
    top: 10,
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
    top: 10,
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
    bottom: "30%",
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
    bottom: "20%",
    padding: "0.4rem 1rem",
    backgroundColor: "#5E68F8",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    zIndex: 12,
  },
  // >>> NEW: padlock icon style
  padlockIcon: {
    position: "absolute",
    top: "35%",
    right: "15%",
    width: 60,
    height: 60,
    cursor: "pointer",
    zIndex: 2,
  },
  // >>> NEW: transparent overlay button for padlock
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
  // >>> NEW: size & display for padlock icon inside button
  padlockIcon: {
    width: "100%",
    height: "100%",
    display: "block",
  },
};
