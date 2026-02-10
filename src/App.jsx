import React, { useState, useRef } from 'react';
import valentine from './assets/valentines-day.png';
import success from './assets/Hugging Hug GIF.gif';

const App = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const noBtnRef = useRef(null);

  // Starting position (Yes ke side me)
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: '0px',
    left: '140px',   // Yes ke just right
  });  
  

  // Button ko parent box ke andar random move karna
  const moveNoButton = () => {
    const btn = noBtnRef.current;
    if (!btn) return;

    const parent = btn.parentElement;
    if (!parent) return;

    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const parentRect = parent.getBoundingClientRect();

    // "No" button ko parent ke andar hi rakhna (pink background / display ke andar)
    const maxX = Math.max(parentRect.width - btnWidth, 300);
    const maxY = Math.max(parentRect.height - btnHeight, 300);

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
  
    setNoButtonPosition({
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };
  
  

  return (
    <div style={styles.container}>
      {!isAccepted ? (
        <div style={styles.card}>
          <img src={valentine} style={styles.gif} />

          <h1 style={styles.text}>
            Harshita, will you be my Valentine?
          </h1>

          <div style={styles.buttonGroup}>
            <button
              style={styles.yesButton}
              onClick={() => setIsAccepted(true)}
            >
              Yes
            </button>

          <button
            ref={noBtnRef}
            style={{
              ...styles.noButton,
              left: noButtonPosition.left,
              top: noButtonPosition.top,
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            No
          </button>

          </div>

          <p style={styles.footerText}>
            "No" seems a bit shy...🫣
          </p>
        </div>
      ) : (
        <div style={styles.card}>
          <h1 style={styles.text}>YAY! 🎉</h1>
          <img src={success} style={styles.gif} />
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
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  card: {
    textAlign: 'center',
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
    position: 'relative',
    height: '60px',
    width: '260px',     // ⭐ add this
    marginInline: 'auto',
  },
  
  yesButton: {
    marginLeft: '-100px',
    backgroundColor: '#ff4081',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  noButton: {
    backgroundColor: '#757575',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    position: 'absolute',
    transition: 'all 0.2s ease',
  },  
  footerText: {
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#888',
  },
};

export default App;
