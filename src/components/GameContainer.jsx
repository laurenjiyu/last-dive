import React from 'react';

export default function GameContainer({ children }) {
  return (
    <div style={styles.outer}>
      <div style={styles.gameArea}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  outer: {
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameArea: {
    backgroundColor: '#0e1450', // or change based on your screen content
    width: '100%',
    maxWidth: 'calc(100vh * 4 / 3)', // largest 4:3 box that fits
    aspectRatio: '4 / 3',
    position: 'relative',
    overflow: 'hidden',
  },
};
