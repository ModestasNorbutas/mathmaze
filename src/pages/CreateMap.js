import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { createMapActions } from "../store/CreateMapSlice";
import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";
import CreateCell from "../components/CreateMap/CreateCell";
import MapTools from "../components/CreateMap/MapTools";
import MapForm from "../components/CreateMap/MapForm";

export default function CreateMap() {
  const dispatch = useDispatch();
  const mapData = useSelector((state) => state.createMap.mapData);

  const handleMouseUp = useCallback(() => {
    dispatch(createMapActions.mouseUp());
    console.log("mouse up");
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <Card>
      <Grid data={mapData} cell={CreateCell} />
      <MapTools />
      <MapForm />
    </Card>
  );
}
