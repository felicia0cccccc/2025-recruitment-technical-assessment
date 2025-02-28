import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card({ name, roomsAvailable, buildingPicture }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Effect hook to handle window resize events and update state with current window width
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to display different text based on screen size
  const availRoomText = () => {
    if (windowSize <= 600) {
      return `${roomsAvailable} / ${roomsAvailable}`;
    } else {
      return `${roomsAvailable} rooms available`;
    }
  };

  // returns one card
  return (
    <div
      className={styles.card}
      style={
        buildingPicture ? { backgroundImage: `url(${buildingPicture})` } : {}
      }
    >
      {/* rooms availability indicator */}
      <div className={styles.cardRoomsAvailable}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="10px"
          className="green.png"
          style={{ marginRight: "10px" }}
        >
          <path
            fill="#4caf50"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
          />
        </svg>
        {/* display different text based on screen size */}
        {availRoomText()}
      </div>

      {/* building name */}
      <div className={styles.cardBuildingName}>{name}</div>
    </div>
  );
}

export default Card;
