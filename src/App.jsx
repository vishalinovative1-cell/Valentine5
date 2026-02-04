import React, { useState } from 'react';
import valentine from './assets/valentines-day.png';
import success from './assets/Hugging Hug GIF.gif';

const App = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '60%' });

  // Function to move the "No" button to a random position
  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 80) + 10; // keep within 10-90% of screen
    const randomY = Math.floor(Math.random() * 80) + 10;
    setNoButtonPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  return (
    <div style={styles.container}>
      {!isAccepted ? (
        <div style={styles.card}>
          <img 
            src=
            // "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3dsYmw4anp2Y2Z5NmF1NjZzN3UxZ2ZjODZ1YXFvazl2Y29qdnlwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gjHkRHSuHqu99y9Yjt/giphy.gif"
            {valentine}
            style={styles.gif}
          />
          <h1 style={styles.text}>Nikku 🐼, will you be my Valentine?</h1>
          <div style={styles.buttonGroup}>
            <button 
              style={styles.yesButton} 
              onClick={() => setIsAccepted(true)}
            >
              Yes
            </button>
            <button 
              style={{ ...styles.noButton, position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
              onMouseEnter={moveNoButton}
            >
              No
            </button>
          </div>
          <p style={styles.footerText}>"No" seems a bit shy...🫣</p>
        </div>
      ) : (
        <div style={styles.card}>
          <h1 style={styles.text}>YAY! 🎉</h1>
          <img 
            src={success} 
            style={styles.gif}
          />
          <p style={styles.text}>See you then!</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fce4ec',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  card: {
    textAlign: 'center',
    marginTop: '100px',
  },
  gif: {
    width: '200px',
    borderRadius: '20px',
  },
  text: {
    color: '#4a4a4a',
    fontSize: '2rem',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  yesButton: {
    backgroundColor: '#ff4081',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    cursor: 'pointer',
    marginRight: '20px',
  },
  noButton: {
    backgroundColor: '#757575',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    transition: 'all 0.2s ease',
  },
  footerText: {
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#888',
  }
};

export default App;