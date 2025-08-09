import { useEffect, useState } from "react";
import "./Popup.css";
import success_image from "../images/success.png"
import error_image from "../images/error.png"
import info_image from "../images/info.png"
import primary_image from "../images/primary.png"


const modeConfig = {
  success: {
    color: "#4caf50",
    image: success_image
  },
  error: {
    color: "#f44336",
    image: error_image
  },
  primary: {
    color: "#1976d2",
    image: primary_image
  },
  info: {
    color: "#d1ba37ff",
    image: info_image
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
