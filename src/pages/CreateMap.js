import React from "react";
import Card from "../components/UI/Card";
import MapForm from "../components/CreateMap/MapForm";
import MapCreator from "../components/CreateMap/MapCreator";

export default function CreateMap() {
  return (
    <Card>
      <MapCreator className="mb-3" />
      <MapForm />
    </Card>
  );
}
