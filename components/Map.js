import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import pah from "../informacionPAH.json"
import {icon} from "leaflet"

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


export default function Map() { 
  const mobile = useMediaQuery(600);
  const mobileSize = {height: "40vh", width: "80vw", zIndex: 0}
  const desktopSize = {height: "91vh", width: "80vw", zIndex: 0}
  console.log(mobile);
  
    const ICON = icon({
        iconUrl: "/locationIcon.png",
        iconSize: [32, 32],
      })
    const markers = pah.map((persona)=>{
        return(
            <Marker icon={ICON} position={[persona.alt, persona.lat]} key={persona.nombre}>
            <Popup>
              {persona.nombre} <br /> {persona.direccion} <br /> {persona.descripcion}
            </Popup>
          </Marker>
        )
    })
   if(mobile){return (
        <MapContainer center={[41.387, 2.169]} zoom={13} scrollWheelZoom={false} style={mobileSize} id="map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {markers}
        </MapContainer>
      )}else {
        return (
          <MapContainer center={[41.387, 2.169]} zoom={13} scrollWheelZoom={false} style={desktopSize} id="map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {markers}
          </MapContainer>
        )
      }
}
