import React, { useState } from "react";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

export default function KitchenRoom() {
  const navigate = useNavigate();
  //for the recipt book modal:
  const [modalOpen, setModalOpen] = useState(false);
  const [bookClicked, setBookClicked] = useState(false);
  const handleBookClick = () => {
    setModalOpen(true);
    setBookClicked(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <Timer />
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
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent modal from closing on inner click
          >
            <img
              src="/assets/openbook.jpg"
              alt="Open Book"
              style={styles.modalImage}
            />
            <input
              type="text"
              placeholder="Recipe 1 Code:"
              style={styles.input}
            />
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
    width: "400px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "10px",
    zIndex: 11,
  },
  //Recipe Book Modal input text for guesses
  input: {
    position: "absolute",
    top: "40%",
    width: "60%",
    padding: "0.5rem",
    border: "4px solid #5E68F8",
    borderRadius: "5px",
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
};
