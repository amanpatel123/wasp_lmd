import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../Header';
import ReactDOM from 'react-dom';

import Tooltip from './Tooltips';
import './Dashboard.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
 
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.MAPBOXGL_ACCESS_TOKEN;
const hospitals = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { Name: 'VA Medical Center -- Leestown Division', Address: '2250 Leestown Rd' }, geometry: { type: 'Point', coordinates: [-84.539487, 38.072916] } },
    { type: 'Feature', properties: { Name: 'St. Joseph East', Address: '150 N Eagle Creek Dr' }, geometry: { type: 'Point', coordinates: [-84.440434, 37.998757] } },
    { type: 'Feature', properties: { Name: 'Central Baptist Hospital', Address: '1740 Nicholasville Rd' }, geometry: { type: 'Point', coordinates: [-84.512283, 38.018918] } },
    { type: 'Feature', properties: { Name: 'VA Medical Center -- Cooper Dr Division', Address: '1101 Veterans Dr' }, geometry: { type: 'Point', coordinates: [-84.506483, 38.02972] } },
    { type: 'Feature', properties: { Name: 'Shriners Hospital for Children', Address: '1900 Richmond Rd' }, geometry: { type: 'Point', coordinates: [-84.472941, 38.022564] } },
    { type: 'Feature', properties: { Name: 'Eastern State Hospital', Address: '627 W Fourth St' }, geometry: { type: 'Point', coordinates: [-84.498816, 38.060791] } },
    { type: 'Feature', properties: { Name: 'Cardinal Hill Rehabilitation Hospital', Address: '2050 Versailles Rd' }, geometry: { type: 'Point', coordinates: [-84.54212, 38.046568] } },
    { type: 'Feature', properties: { Name: 'St. Joseph Hospital', ADDRESS: '1 St Joseph Dr' }, geometry: { type: 'Point', coordinates: [-84.523636, 38.032475] } },
    { type: 'Feature', properties: { Name: 'UK Healthcare Good Samaritan Hospital', Address: '310 S Limestone' }, geometry: { type: 'Point', coordinates: [-84.501222, 38.042123] } },
    { type: 'Feature', properties: { Name: 'UK Medical Center', Address: '800 Rose St' }, geometry: { type: 'Point', coordinates: [-84.508205, 38.031254] } }
  ]
};
const libraries = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { Name: 'Village Branch', Address: '2185 Versailles Rd' }, geometry: { type: 'Point', coordinates: [-84.548369, 38.047876] } },
    { type: 'Feature', properties: { Name: 'Northside Branch', ADDRESS: '1733 Russell Cave Rd' }, geometry: { type: 'Point', coordinates: [-84.47135, 38.079734] } },
    { type: 'Feature', properties: { Name: 'Central Library', ADDRESS: '140 E Main St' }, geometry: { type: 'Point', coordinates: [-84.496894, 38.045459] } },
    { type: 'Feature', properties: { Name: 'Beaumont Branch', Address: '3080 Fieldstone Way' }, geometry: { type: 'Point', coordinates: [-84.557948, 38.012502] } },
    { type: 'Feature', properties: { Name: 'Tates Creek Branch', Address: '3628 Walden Dr' }, geometry: { type: 'Point', coordinates: [-84.498679, 37.979598] } },
    { type: 'Feature', properties: { Name: 'Eagle Creek Branch', Address: '101 N Eagle Creek Dr' }, geometry: { type: 'Point', coordinates: [-84.442219, 37.999437] } }
  ]
};

const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const mapContainer = useRef();
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.38, 43.65],
      zoom: 12.5
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on('mouseenter', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';
    });

    // add tooltip when users mouse move over a point
    map.on('mousemove', e => {
      const features = map.queryRenderedFeatures(e.point);
      if (features.length) {
        const feature = features[0];

        // Create tooltip node
        const tooltipNode = document.createElement('div');
        console.log("tool", tooltipNode)
        ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

        console.log("e", e)
        // Set tooltip on map
        tooltipRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(tooltipNode)
          .addTo(map);
      }
    });
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header hideLinks={true} isLoggedIn={isLoggedIn} showDashboard={true} />
      <div className="map-outter-container">
        <div className="map-container" ref={mapContainer} />
      </div>
    </div>
  )
}

export { Dashboard };
