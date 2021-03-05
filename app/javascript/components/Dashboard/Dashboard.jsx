import React, { useState } from 'react';
import { Header } from '../Header';

import './Dashboard.scss';
import MapGL, { GeolocateControl}  from 'react-map-gl';

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  return (
    <div>
      <Header hideLinks={true} isLoggedIn={isLoggedIn} showDashboard={true} />
      <div className="map-box" style={{height: '100%', width: '100%'}}>
        {/* <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken=""
          onViewportChange={(viewport) => setViewport(viewport)}
        /> */}
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={""}
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={positionOptions}
            trackUserLocation
            auto
          />
        </MapGL>
      
      </div>
    </div>
  )
}

export { Dashboard };