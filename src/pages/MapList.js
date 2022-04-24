import { useState, useEffect } from "react";
import styles from "./MapList.module.scss";
import MapListItem from "../components/MapList/MapListItem";

export default function MapList() {
  const [mapList, setMapList] = useState();

  useEffect(() => {
    fetch(
      "https://math-maze-a939f-default-rtdb.europe-west1.firebasedatabase.app/maps.json"
    )
      .then((response) => response.json())
      .then((data) => setMapList(data))
      .catch((error) => alert("Error: " + error?.message));
  }, []);

  return (
    <>
      {!mapList && <p>Loading...</p>}
      {!!mapList && (
        <div className={styles["map-list"]}>
          {Object.entries(mapList).map(([key, item]) => (
            <MapListItem key={key} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
