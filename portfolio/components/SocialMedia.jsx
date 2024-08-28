import React, { useState } from 'react';
import '../styles/socialMedia.css'; // Assuming you have a separate CSS file

function SocialMedia() {
  const [showConnect, setShowConnect] = useState(false);

  const handleSocialClick = () => {
    setShowConnect(true);
  };

  const handleClose = () => {
    setShowConnect(false);
  };

  return (
    <div className="social-media-container">
      <div className="social-buttons">
        <button onClick={handleSocialClick} className="social-btn">
          <i className="fab fa-facebook"></i>
        </button>
        <button onClick={handleSocialClick} className="social-btn">
          <i className="fab fa-twitter"></i>
        </button>
        <button onClick={handleSocialClick} className="social-btn">
          <i className="fab fa-linkedin"></i>
        </button>
      </div>
      {showConnect && (
        <div className="connect-modal">
          <div className="connect-content">
            <h3>Connect with me!</h3>
            <p>You can reach out to me via any of these platforms.</p>
            <button onClick={handleClose} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialMedia;
