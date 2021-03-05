import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../Header';

import './Dashboard.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
 
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = '';


const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    return () => map.remove();
    }, []);
  return (
    <div>
      <Header hideLinks={true} isLoggedIn={isLoggedIn} showDashboard={true} />
      <div className="map-box" style={{height: '1000px', width: '1000px'}}>
        <div className="map-container" ref={mapContainer} />
      
      </div>
    </div>
  )
}

export { Dashboard };