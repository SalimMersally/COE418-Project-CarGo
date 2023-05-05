import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../../index.css"

export default function DisplayMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOcPOc-WgThkmXr4srcefhjXGobnUAPwc",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 34.1149251, lng: 35.6750143 }), []);

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}