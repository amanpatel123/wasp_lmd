import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../Header';
import ReactDOM from 'react-dom';

import { Tooltip } from './Tooltips';
import './Dashboard.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.MAPBOXGL_ACCESS_TOKEN;

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

    var marker1 = new mapboxgl.Marker()
      .setLngLat([-79.38, 43.65])
      .addTo(map);

    var marker2 = new mapboxgl.Marker()
      .setLngLat([-79.3777070476327,43.64890840143775])
      .addTo(map);
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
