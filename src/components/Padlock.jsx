import React, { useState } from 'react';

// Padlock modal with corrected styling and error flash
export default function Padlock({ correctCode, onClose, onSuccess }) {
  const [digits, setDigits] = useState(Array(6).fill(0));
  const [error, setError] = useState(false);

  const changeDigit = (idx, delta) => {
    setDigits(prev => {
      const copy = [...prev];
      copy[idx] = (copy[idx] + delta + 10) % 10;
      return copy;
    });
  };

  const handleSubmit = () => {
    if (digits.join('') === correctCode) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  // Base arrow style
  const arrowBtn = {
    width: 0,
    height: 0,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    cursor: 'pointer'
  };

  // Styles (overlay depends on error state)
  const styles = {
    overlay: error
      ? {
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(255,0,0,0.4)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000
        }
      : {
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000
        },
    container: {
      background: '#e0e4ff',
      width: '40rem',
      padding: '4rem',
      borderRadius: '1rem',
      border: '8px solid #111832',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    closeBtn: {
      position: 'absolute', top: '1rem', right: '1rem',
      background: '#2a30ff',
      border: 'none',
      borderRadius: '50%',
      width: '3rem', height: '3rem',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer'
    },
    wheels: { display: 'flex', gap: '2rem', marginBottom: '3rem' },
    wheel: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    upArrow: { ...arrowBtn, borderBottom: '24px solid #111832' },
    downArrow: { ...arrowBtn, borderTop: '24px solid #111832' },
    digitBox: {
      width: '4rem', height: '6rem',
      background: 'white',
      color: 'black',
      fontSize: '3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '1rem 0', border: '4px solid #111832'
    },
    submit: {
      padding: '1.5rem 4rem',
      background: '#2a30ff',
      color: 'white',
      border: '4px solid white',
      fontSize: '2rem',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.container} onClick={e => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        <div style={styles.wheels}>
          {digits.map((d, i) => (
            <div style={styles.wheel} key={i}>
              <div style={styles.upArrow} onClick={() => changeDigit(i, +1)} />
              <div style={styles.digitBox}>{d}</div>
              <div style={styles.downArrow} onClick={() => changeDigit(i, -1)} />
            </div>
          ))}
        </div>
        <button style={styles.submit} onClick={handleSubmit}>Submit Answer</button>
      </div>
    </div>
  );
}