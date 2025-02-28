import styles from "./Header.module.css";
import door1 from "../assets/freeRoomsLogo.png";
import door2 from "../assets/freeRoomsDoorClosed.png";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

function Header() {
  // state to toggle between two logo images
  const [logo, setLogo] = useState(door1);

  // function to switch logo when clicked
  const updateLogo = () => {
    setLogo(logo === door1 ? door2 : door1);
  };

  return (
    <header>
      {/* containing logo and navigation */}
      <div className={styles.headerTopBar}>
        {/* Logo and title container */}
        <div className={styles.headerLogoContainer}>
          <img
            src={logo}
            alt="freeRoomsLogo.png"
            className={styles.headerLogo}
            onClick={updateLogo}
          ></img>
          <h1 className={styles.headerTitle}>Freerooms</h1>
        </div>

        {/* Navigation buttons container */}
        <div className={styles.headerNavBar}>
          {/* Search button */}
          <button className={styles.headerSquareButtons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              className="search-icon"
            >
              <path
                fill="#f06c00"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </button>

          {/* Grid view button - currently active */}
          <button className={styles.headerSquareButtonsOnClick}>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt"
              viewBox="0 0 24 24"
              data-testid="GridViewRoundedIcon"
              width="25"
              height="25"
            >
              <path
                fill="#ffffff"
                d="M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2m0 10h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2m8-16v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2m2 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2"
              />
            </svg>
          </button>

          {/* Map button */}
          <button className={styles.headerSquareButtons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="20"
              height="20"
              className="map-icon"
            >
              <path
                fill="#f06c00"
                d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z"
              />
            </svg>
          </button>

          {/* Dark/light mode button */}
          <button className={styles.headerSquareButtons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="18"
              height="18"
              className="night-icon"
            >
              <path
                fill="#f06c00"
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className={styles.headerLine}></hr>
    </header>
  );
}

export default Header;
