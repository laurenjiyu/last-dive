import React, { useState, useEffect } from "react";
import theme from "../theme";
import { bookImages } from "../asset-links";

export default function Book({
  modalOpen,
  onClose,
  onIncorrectGuess,
  onCorrectGuess,
}) {
  const [wordInputs, setWordInputs] = useState(["", "", "", "", ""]);
  const [feedback, setFeedback] = useState("");
  const [guess, setGuess] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(bookImages.default);
  const [courseType, setCourseType] = useState("appetizer");
  const [correctWords, setCorrectWords] = useState([
    "beluga",
    "sturgeon",
    "caviar",
  ]);

  const setCourse = (type) => {
    let words = [];
    switch (type) {
      case "appetizer":
        words = ["beluga", "sturgeon", "caviar"];
        break;
      case "entree":
        words = ["medium", "rare", "beef", "wellington"];
        break;
      case "dessert":
      default:
        words = ["red", "velvet", "cupcake", "protein", "bar"];
        break;
    }
    setCourseType(type);
    setCorrectWords(words);
    setWordInputs(new Array(words.length).fill(""));
    setFeedback("");
    setShowFeedback(false);
    setBackgroundImage(bookImages.default);
  };

  const handleWordChange = (index, value) => {
    const newInputs = [...wordInputs];
    newInputs[index] = value.toLowerCase();
    setWordInputs(newInputs);
  };

  const checkWords = () => {
    const incorrectIndices = correctWords
      .map((word, i) => (wordInputs[i] !== word ? i : null))
      .filter((i) => i !== null);

    if (incorrectIndices.length === 0) {
      setFeedback("success");
      setShowFeedback(true);
      if (typeof onCorrectGuess === "function") {
        onCorrectGuess();
      }

      const courseImageMap = {
        appetizer: bookImages.course1,
        entree: bookImages.course2,
        dessert: bookImages.course3,
      };

      setBackgroundImage(courseImageMap[courseType] || bookImages.default);
    } else {
      const ordinalMap = ["first", "second", "third", "fourth", "fifth"];
      const incorrectOrdinals = incorrectIndices.map((i) => ordinalMap[i]);
      setFeedback(`incorrect:${incorrectOrdinals.join(", ")}`);
      setShowFeedback(true);
      setBackgroundImage(bookImages.rejected);
      if (typeof onIncorrectGuess === "function") {
        onIncorrectGuess();
      }
    }
  };

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => setShowFeedback(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback]);

  if (!modalOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          {["appetizer", "entree", "dessert"].map((type) => (
            <button
              key={type}
              onClick={() => setCourse(type)}
              style={{
                ...styles.courseButton,
                ...(courseType === type ? styles.courseButtonActive : {}),
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <img src={backgroundImage} alt="Open Book" style={styles.modalImage} />
        <div style={styles.leftHalf}>
          <div style={styles.recipeBook}>
            You find a recipe book lying on the kitchen counter...Maybe there
            are some interesting recipes to explore
          </div>
          <div style={styles.inputContainer}>
            {correctWords.map((_, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Word ${i + 1}`}
                value={wordInputs[i]}
                onChange={(e) => handleWordChange(i, e.target.value)}
                style={styles.input}
              />
            ))}
          </div>

          <button onClick={checkWords} style={styles.submitButton}>
            Look for Recipe
          </button>

          {feedback === "success" && showFeedback && (
            <div style={styles.feedbackSuccess}>Success!</div>
          )}
          {feedback.startsWith("incorrect:") && showFeedback && (
            <div style={styles.feedbackClose}>
              Your <strong>{feedback.split(":")[1]}</strong> word
              {feedback.split(":")[1].includes(",") ? "s are" : " is"} incorrect.
            </div>
          )}

          <button onClick={onClose} style={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
  leftHalf: {
    position: "absolute",
    top: 0,
    left: "1%",
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    width: "90%",
    marginTop: "2rem",
    marginBottom: "2rem",
    zIndex: 12,
  },
  input: {
    flex: "1 1 40%",
    minWidth: "120px",
    maxWidth: "120px",
    padding: "0.5rem",
    border: "2px solid #5E68F8",
    borderRadius: "5px",
    fontFamily: "'Inria Sans', sans-serif",
    fontSize: "1rem",
  },
  recipeBook: {
    marginTop: "2rem",
    fontSize: "1.2rem",
    textAlign: "center",
    color: theme.colors.darkBlue,
    padding: "0.5rem 3rem",
  },
  feedbackSuccess: {
    position: "absolute",
    top: 50,
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
    fontSize: "2rem",
    color: "#f44336",
    padding: "0.4rem 2rem",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: "10px",
    zIndex: 20,
    transition: "opacity 0.5s ease-in-out",
  },
  submitButton: {
    marginTop: "1.5rem",
    padding: "1rem 1rem",
    backgroundColor: theme.colors.darkBlue,
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "'Inria Sans', sans-serif",
    fontSize: "1.5rem",
    fontWeight: "bold",
    zIndex: 12,
  },
  closeButton: {
    marginTop: "0.5rem",
    padding: "1rem 1rem",
    backgroundColor: theme.colors.darkBlue,
    fontFamily: "'Inria Sans', sans-serif",
    fontSize: "1.5rem",
    color: "#fff",
    borderWidth: "2px",
    borderRadius: "4px",
    cursor: "pointer",
    zIndex: 12,
  },
  courseButton: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "2px solid #5E68F8",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    zIndex: 12,
  },
  courseButtonActive: {
    backgroundColor: "#5E68F8",
    color: "white",
    borderColor: "#3949ab",
  },
};
