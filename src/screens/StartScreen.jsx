import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartScreen() {
  const navigate = useNavigate();

  const styles = {
    container: {
      backgroundColor: '#0e1450',
      color: 'white',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      position: 'relative',
    },
    title: {
      fontSize: '4rem',
      fontWeight: 'bold',
      margin: 0,
    },
    subtitle: {
      fontSize: '1.2rem',
      marginTop: '1rem',
    },
    course: {
      fontSize: '1rem',
      marginTop: '1rem',
    },
    startButton: {
      fontSize: '1.5rem',
      color: 'white',
      background: 'none',
      border: '1px solid white',
      padding: '0.5rem 1rem',
      marginTop: '2rem',
      cursor: 'pointer',
      borderRadius: '6px',
    },
    submarine: {
      position: 'absolute',
      right: '5%',
      bottom: '10%',
      width: '150px',
      opacity: 0.5,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>LAST DIVE</h1>
      <p style={styles.subtitle}>
        a digital escape room by adi, anthony, lauren, nhu, and yinlin
      </p>
      <p style={styles.course}>CS 247G</p>
      <button style={styles.startButton} onClick={() => navigate('/game')}>
        Start →
      </button>
      <img
        src="/assets/submarine.png" // put your submarine image in `public/assets`
        alt="Submarine"
        style={styles.submarine}
      />
    </div>
  );
}
