import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import pah from "../informacionPAH.json"
import {icon} from "leaflet"


export default function MapMobile() { 
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
    return (
        <MapContainer center={[41.387, 2.169]} zoom={13} scrollWheelZoom={false} style={{height: "20rem", width: "90vw", zIndex: 0}} id="map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {markers}
        </MapContainer>
      )
}
