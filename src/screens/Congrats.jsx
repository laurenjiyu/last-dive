import React from 'react';

export default function Congrats() {
  return (
    <div style={{
      backgroundColor: '#0e1450',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>You've escaped the kitchen room! Now onto the next one...</h1>
    </div>
  );
}