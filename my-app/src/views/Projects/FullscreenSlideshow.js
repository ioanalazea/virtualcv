import React, { useState } from "react";

export default function FullscreenSlideshow({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlideshow = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Folder icon that opens slideshow */}
      <div
        style={{
          cursor: "pointer",
          display: "inline-block",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          userSelect: "none",
        }}
        onClick={() => openSlideshow(0)}
        title="Open slideshow"
      >
        {/* Simple folder icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-7l-2-3H4a2 2 0 0 0-2 2z" />
        </svg>
        <div style={{ textAlign: "center", marginTop: "5px" }}>Open Slideshow</div>
      </div>

      {/* Fullscreen slideshow overlay */}
      {isOpen && images.length > 0 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            zIndex: 1000,
          }}
        >
          {/* Close icon */}
          <button
            onClick={closeSlideshow}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            aria-label="Close slideshow"
          >
            &times;
          </button>

          {/* Image and description */}
          <div
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              textAlign: "center",
            }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].description}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <p style={{ fontSize: "1.2rem" }}>{images[currentIndex].description}</p>
          </div>

          {/* Navigation arrows */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "90vw",
            }}
          >
            <button
              onClick={prevImage}
              style={navButtonStyle}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              style={navButtonStyle}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const navButtonStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  border: "none",
  color: "white",
  fontSize: "2rem",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  borderRadius: "5px",
  userSelect: "none",
};
