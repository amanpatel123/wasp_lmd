import React, { useState, useRef, useEffect, useReducer } from 'react';
import { Header } from '../Header';

import { Tooltip } from './Tooltips';
import './Dashboard.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import axios from 'axios';
import { directionsData } from './data';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.MAPBOXGL_ACCESS_TOKEN;
const mapStyle = [
  'mapbox://styles/mapbox/light-v10',
  'mapbox://styles/mapbox/streets-v11'
]

const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const mapContainer = useRef();
  const [routesData, setRoutesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const data = [
    { 
      id: 'route-1',
      start: [-79.38,43.65],
      end: [-79.3777070476327,43.64890840143775]
    },
    {
      id: 'route-2',
      start: [-79.37697563636958, 43.65303473059163],
      end: [-79.37321417901185, 43.653709119795394]
    }
  ]

  const getRoute = async (source, token) => {

    try {
      var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + source.start[0] + ',' + source.start[1] + ';' + source.end[0] + ',' + source.end[1] + '?steps=true&geometries=geojson&access_token=' + token;

      const response = await axios.get(url);
      if(response.status === 200){
        return response.data.routes[0];
      }
      return false;
    } catch (e) {
      return false;
    }
  }    
  
  useEffect(() => {
    const getAllData = () => {
 
      const arr = [];
      data.forEach(async source => {
        setIsLoading(true);
        let route = await getRoute(source, mapboxgl.accessToken);
        if(route) {
          arr.push({
              ...source,
              route
          });
        }
        setIsLoading(false);
      });

      return arr;
    }
    setRoutesData(getAllData());
    
  }, []);

  useEffect(() => {

    var map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle[0],
      center: [-79.38, 43.65],
      zoom: 12.5
    })

    map.on('load', async function() {
      console.log("directionsData",directionsData)
      directionsData.forEach(src => {
        console.log("sss",src)
        // Add starting point to the map  
        var endId = src.id + 'end-id';
        var route = src.route.geometry.coordinates;
        var geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };

        if (map.getLayer(endId)) {
          map.getSource(endId).setData(endData);
        } else {
          map.addLayer({
            id: endId,
            type: 'circle',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: src.end
                  }
                }]
              }
            },
            paint: {
              'circle-radius': 10,
              'circle-color': '#f30'
            }
          });
        }
        if (map.getSource(src.id)) {
          map.getSource(src.id).setData(geojson);
        } else {
         
          var marker1 = new mapboxgl.Marker()
            .setLngLat(src.start)
            .addTo(map);

          var marker2 = new mapboxgl.Marker()
            .setLngLat(src.end)
            .addTo(map);
          
          if(map.isSourceLoaded){
            map.addLayer({
              id: src.id,
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: geojson
                  }
                }
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': 'red',
                'line-width': 5,
                'line-opacity': 0.5
              }
            });
            console.log("map", map)
          }   
        }
        map.getSource(src.id).setData(geojson)
      });
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
      <p>{!isLoading && JSON.stringify(routesData)}</p>
    </div>
  );
}

export { Dashboard };
