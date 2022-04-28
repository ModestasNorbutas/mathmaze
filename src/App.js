import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Loading from "./components/UI/Loading";
import Alert from "./components/UI/Alert";

const Play = React.lazy(() => import("./pages/Play"));
const Options = React.lazy(() => import("./pages/Options"));
const CreateMap = React.lazy(() => import("./pages/CreateMap"));
const MapList = React.lazy(() => import("./pages/MapList"));

export default function App() {
  return (
    <BrowserRouter>
      <Alert />
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/maplist" element={<MapList />} />
          <Route path="/options" element={<Options />} />
          <Route path="/create" element={<CreateMap />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
