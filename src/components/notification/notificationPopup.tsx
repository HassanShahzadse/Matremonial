// NotificationPopup.js
import { useState } from 'react';

const NotificationPopup: React.FC<any>  = ({ profileViews, friendRequests }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`notification-popup ${isOpen ? 'open' : ''}`}>
      <div className="notification-header">
        <h2>Notifications</h2>
        <button onClick={handleClose}>Close</button>
      </div>
      <div className="notification-content">
        <div className="notification-item">
          <span>{profileViews}</span>
          <p>People viewed your profile</p>
        </div>
        <div className="notification-item">
          <span>{friendRequests}</span>
          <p>Friend requests</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
