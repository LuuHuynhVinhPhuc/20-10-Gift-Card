import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';

function App() {

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    triggerFireworks(); // call when handler is used
  };

  const triggerFireworks = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="container">
      <h1>Chúc mừng ngày Phụ nữ Việt Nam 20/10!</h1>
      <button onClick={handleClick}>Nhấn vào đây để nhận lời chúc</button>
      {showMessage && (
        <p className="special-message">
          Chúc bạn 20/10 vui vẻ, ngập tràn hạnh phúc và luôn tỏa sáng như chính con người bạn!
        </p>
      )}
    </div>
  );
}

export default App
