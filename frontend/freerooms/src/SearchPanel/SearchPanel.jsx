import styles from "./SearchPanel.module.css";

function SearchPanel() {
  return (
    <div className={styles.container}>
      {/*joining search bar and filter sort boxes*/}
      <div className={styles.searchBar}>
        {/*search bar: containing magnifying glass icon and search input*/}
        <span className={styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="16"
            height="16"
            className="search-icon"
          >
            <path
              fill="#0000008a"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </span>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search for a building..."
          aria-label="Search"
        />
      </div>
      <div className={styles.dropdownContainer}>
        {/*joining filters and sort dropdown*/}
        <button className={styles.dropdown}>
          {/* containing filter logo and text */}
          <div className={styles.dropdownLogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              className="filter.png"
            >
              <path
                fill="#f77f00"
                d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
              />
            </svg>
            <p style={{ color: "hsl(31, 100%, 48%)" }}>Filters</p>
          </div>
        </button>
        <button className={styles.dropdown}>
          {/* containing sort logo and text */}
          <div className={styles.dropdownLogo}>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt"
              viewBox="0 0 24 24"
              data-testid="FilterListIcon"
              width="24"
              height="24"
            >
              <path
                fill="#f77f00"
                d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
              />
            </svg>
            <p style={{ color: "hsl(31, 100%, 48%)" }}>Sort</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchPanel;
