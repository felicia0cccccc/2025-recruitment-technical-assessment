import './index.css'
// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Header from './Header/Header.jsx'
import SearchPanel from './SearchPanel/SearchPanel.jsx'
// import Card from './Card/Card.jsx'
import BuildingList from './Card/BuildingList.jsx'
import img1 from './assets/anitab.webp'
import buildingData from './data.json'

function App() {
  return(
    <>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.submainContainer}>  {/*contain search panel and pictures*/}
          <SearchPanel />
          <BuildingList />
          {/* <div className={styles.cardContainer}>
            {buildingData.map((building) => (
              <Card 
                key={building.name}
                name={building.name}
                roomsAvailable={building.rooms_available}
                buildingPicture={buildingImages[building.building_file.replace('./', '')]}
              />
            ))}
            <Card name="Anita B Lawrence Centre" roomsAvailable="44" buildingPicture={img1}/>
          </div> */}
        </div>
      </div>
      
    </>
  );
}

export default App
