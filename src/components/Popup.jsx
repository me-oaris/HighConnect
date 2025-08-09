import { useEffect, useState } from "react";
import "./Popup.css";

const modeConfig = {
  success: {
    color: "#4caf50",
    image: "https://via.placeholder.com/60/4caf50/ffffff?text=✔"
  },
  error: {
    color: "#f44336",
    image: "https://via.placeholder.com/60/f44336/ffffff?text=✖"
  },
  primary: {
    color: "#1976d2",
    image: "https://via.placeholder.com/60/1976d2/ffffff?text=P"
  },
  info: {
    color: "#d1ba37ff",
    image: "https://via.placeholder.com/60/2196f3/ffffff?text=i"
  }
};

export default function Popup({ mode = "primary", title, description, show, onClose }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  const { color, image } = modeConfig[mode] || modeConfig.primary;

  return (
    <div className="popup" style={{ "--bar-color": color }}>
      <div className="popup-top-bar">
        <img src={image} alt="popup-icon" />
      </div>
      <div className="popup-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="popup-timer"><span></span></div>
    </div>
  );
}
