/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface FullScreenImageProps {
  src: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ src }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div>
      <img
        style={{ maxWidth: 200, width: "100%", height: 200 }}
        src={src}
        onClick={openFullScreen}
      />

      {isFullScreen && (
        <div style={fullscreenStyles}>
          <HighlightOffIcon sx={closeButtonStyles} htmlColor="white" onClick={closeFullScreen}>
            X Close
          </HighlightOffIcon>
          <img
            style={fullscreenImageStyles}
            src={src}
            alt="Full-screen Image"
          />
        </div>
      )}
    </div>
  );
};

// CSS styles for the full-screen image
const fullscreenStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 9999,
};

const fullscreenImageStyles: React.CSSProperties = {
  maxWidth: "90%",
  maxHeight: "90%",
};

const closeButtonStyles: React.CSSProperties = {
  position: "fixed",
  top: "10px",
  right: "10px",
  zIndex: 99999,
  width: "10%",
  height: "10%"
};

export default FullScreenImage;
