import React from 'react';

export default function Congrats() {
  return (
    <div style={{
      backgroundColor: 'blue',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Congrats! You now know a little bit more about me.</h1>
    </div>
  );
}