import styles from "./Card.module.css";
import Card from "./Card.jsx";
import buildingData from "../data.json";
import agsm from "../assets/agsm.webp";
import ainsworth from "../assets/ainsworth.webp";
import anitb from "../assets/anitab.webp";
import biologicalScience from "../assets/biologicalScience.webp";
import biologicalScienceWest from "../assets/biologicalScienceWest.webp";
import blockHouse from "../assets/blockhouse.webp";
import businessSchool from "../assets/businessSchool.webp";
import civilBuilding from "../assets/civilBuilding.webp";
import colombo from "../assets/colombo.webp";
import cseBuilding from "../assets/cseBuilding.webp";

const buildingPictures = {
  "agsm.webp": agsm,
  "ainsworth.webp": ainsworth,
  "anitb.webp": anitb,
  "biologicalScience.webp": biologicalScience,
  "biologicalScienceWest.webp": biologicalScienceWest,
  "blockhouse.webp": blockHouse,
  "businessSchool.webp": businessSchool,
  "civilBuilding.webp": civilBuilding,
  "colombo.webp": colombo,
  "cseBuilding.webp": cseBuilding,
};

function BuildingList() {
  // a function to show all buildings
  return (
    <div className={styles.cardContainer}>
      {" "}
      {/* contains all the cards */}
      {buildingData.map((building) => (
        <Card
          key={building.name}
          name={building.name}
          roomsAvailable={building.rooms_available}
          buildingPicture={
            buildingPictures[building.building_picture.replace("./", "")]
          }
        />
      ))}
    </div>
  );
}

export default BuildingList;
