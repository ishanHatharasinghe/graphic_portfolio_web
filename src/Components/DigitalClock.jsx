import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString(); // Format the time as HH:MM:SS
  };

  return (
    <div style={styles.clockContainer}>
      <p style={styles.timeText}>{formatTime(time)}</p>
    </div>
  );
};

const styles = {
  clockContainer: {
    position: "fixed",
    bottom: "15px",
    right: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Semi-transparent black
    color: "#006EFFFF", // Vibrant blue text
    padding: "10px 15px", // Reduced padding
    borderRadius: "12px", // Smaller border radius
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)", // Slightly lighter shadow
    zIndex: 1000,
    fontFamily: "'Roboto Mono', monospace", // Monospace font for a tech feel
    fontSize: "16px", // Reduced font size
    fontWeight: "500", // Slightly lighter weight
    border: "1px solid #006EFFFF", // Slimmer border
    transition: "transform 0.3s ease", // Smooth hover effect
    cursor: "pointer",
  },
  timeText: {
    margin: 0,
    letterSpacing: "0.5px", // Adjusted letter spacing
  },
};

export default DigitalClock;
