import React from "react";
import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";
import MapTools from "../components/CreateMap/MapTools";
import MapForm from "../components/CreateMap/MapForm";
import { useSelector } from "react-redux";

export default function CreateMap() {
  const mapData = useSelector((state) => state.createMap.mapData);

  return (
    <Card>
      <Grid data={mapData} type="create" />
      <MapTools />
      <MapForm />
    </Card>
  );
}
