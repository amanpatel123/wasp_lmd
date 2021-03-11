export const hospitals = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      properties: {
        Name: 'VA Medical Center -- Leestown Division',
        Address: '2250 Leestown Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.539487, 38.072916]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'St. Joseph East',
        Address: '150 N Eagle Creek Dr'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.440434, 37.998757]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Central Baptist Hospital',
        Address: '1740 Nicholasville Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.512283, 38.018918]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'VA Medical Center -- Cooper Dr Division',
        Address: '1101 Veterans Dr'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.506483, 38.02972]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Shriners Hospital for Children',
        Address: '1900 Richmond Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.472941, 38.022564]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Eastern State Hospital',
        Address: '627 W Fourth St'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.498816, 38.060791]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Cardinal Hill Rehabilitation Hospital',
        Address: '2050 Versailles Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.54212, 38.046568]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'St. Joseph Hospital',
        ADDRESS: '1 St Joseph Dr'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.523636, 38.032475]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'UK Healthcare Good Samaritan Hospital',
        Address: '310 S Limestone'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.501222, 38.042123]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'UK Medical Center',
        Address: '800 Rose St'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.508205, 38.031254]
      }
    }
  ]
};

export const libraries = {
  type: 'FeatureCollection',
  features: [{
      type: 'Feature',
      properties: {
        Name: 'Village Branch',
        Address: '2185 Versailles Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.548369, 38.047876]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Northside Branch',
        ADDRESS: '1733 Russell Cave Rd'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.47135, 38.079734]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Central Library',
        ADDRESS: '140 E Main St'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.496894, 38.045459]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Beaumont Branch',
        Address: '3080 Fieldstone Way'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.557948, 38.012502]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Tates Creek Branch',
        Address: '3628 Walden Dr'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.498679, 37.979598]
      }
    },
    {
      type: 'Feature',
      properties: {
        Name: 'Eagle Creek Branch',
        Address: '101 N Eagle Creek Dr'
      },
      geometry: {
        type: 'Point',
        coordinates: [-84.442219, 37.999437]
      }
    }
  ]
};

export const directionsData = [{
  "id": "route-1",
  "start": [-79.38, 43.65],
  "end": [-79.3777070476327, 43.64890840143775],
  "route": {
    "weight_name": "auto",
    "weight": 101.027,
    "duration": 57.472,
    "distance": 331.242,
    "legs": [{
      "admins": [{
        "iso_3166_1_alpha3": "CAN",
        "iso_3166_1": "CA"
      }],
      "weight": 101.027,
      "duration": 57.472,
      "steps": [{
        "intersections": [{
          "entry": [true],
          "bearings": [343],
          "duration": 0.202,
          "mapbox_streets_v8": {
            "class": "service"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 0.279,
          "geometry_index": 0,
          "location": [-79.380069, 43.649984]
        }, {
          "bearings": [163, 343],
          "entry": [false, true],
          "in": 0,
          "turn_weight": 15,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "service"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 1,
          "geometry_index": 1,
          "location": [-79.380073, 43.649994]
        }],
        "maneuver": {
          "type": "depart",
          "instruction": "Drive north.",
          "bearing_after": 343,
          "bearing_before": 0,
          "location": [-79.380069, 43.649984]
        },
        "name": "",
        "duration": 1.83,
        "distance": 10.125,
        "driving_side": "right",
        "weight": 17.515,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.380069, 43.649984],
            [-79.380073, 43.649994],
            [-79.380094, 43.650043],
            [-79.380104, 43.650068]
          ],
          "type": "LineString"
        }
      }, {
        "intersections": [{
          "entry": [true, false],
          "in": 1,
          "bearings": [74, 163],
          "duration": 2.795,
          "turn_weight": 17.5,
          "turn_duration": 2.315,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 18.052,
          "geometry_index": 3,
          "location": [-79.380104, 43.650068]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 254],
          "duration": 9,
          "turn_weight": 0.5,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 10.85,
          "geometry_index": 4,
          "location": [-79.38006, 43.650077]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [74, 253],
          "duration": 0.908,
          "turn_weight": 0.5,
          "turn_duration": 0.008,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 1.535,
          "geometry_index": 6,
          "location": [-79.37917, 43.650269]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 254],
          "duration": 6.775,
          "turn_weight": 0.5,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 8.283,
          "geometry_index": 7,
          "location": [-79.379089, 43.650286]
        }, {
          "bearings": [74, 253],
          "entry": [true, false],
          "in": 1,
          "turn_weight": 2,
          "turn_duration": 0.008,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "geometry_index": 8,
          "location": [-79.378529, 43.650408]
        }],
        "maneuver": {
          "type": "end of road",
          "instruction": "Turn right onto Adelaide Street West.",
          "modifier": "right",
          "bearing_after": 74,
          "bearing_before": 343,
          "location": [-79.380104, 43.650068]
        },
        "name": "Adelaide Street West",
        "duration": 20.781,
        "distance": 142,
        "driving_side": "right",
        "weight": 42.211,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.380104, 43.650068],
            [-79.38006, 43.650077],
            [-79.379557, 43.650185],
            [-79.37917, 43.650269],
            [-79.379089, 43.650286],
            [-79.378529, 43.650408],
            [-79.378427, 43.650429]
          ],
          "type": "LineString"
        }
      }, {
        "intersections": [{
          "entry": [true, false],
          "in": 1,
          "bearings": [164, 254],
          "duration": 5.578,
          "turn_weight": 9,
          "turn_duration": 4.105,
          "mapbox_streets_v8": {
            "class": "primary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 10.694,
          "geometry_index": 9,
          "location": [-79.378427, 43.650429]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [163, 344],
          "duration": 21.128,
          "turn_duration": 0.019,
          "mapbox_streets_v8": {
            "class": "primary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 23.748,
          "geometry_index": 10,
          "location": [-79.378396, 43.650353]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [163, 343],
          "duration": 1.492,
          "turn_duration": 0.019,
          "mapbox_streets_v8": {
            "class": "primary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 1.657,
          "geometry_index": 11,
          "location": [-79.377927, 43.649247]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [164, 343],
          "duration": 3.315,
          "turn_duration": 2.019,
          "mapbox_streets_v8": {
            "class": "primary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 1.458,
          "geometry_index": 13,
          "location": [-79.377895, 43.649169]
        }, {
          "bearings": [163, 344],
          "entry": [true, false],
          "in": 1,
          "turn_duration": 0.019,
          "mapbox_streets_v8": {
            "class": "primary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "geometry_index": 15,
          "location": [-79.377866, 43.649095]
        }],
        "maneuver": {
          "type": "turn",
          "instruction": "Turn right onto Yonge Street.",
          "modifier": "right",
          "bearing_after": 164,
          "bearing_before": 74,
          "location": [-79.378427, 43.650429]
        },
        "name": "Yonge Street",
        "duration": 34.861,
        "distance": 179.117,
        "driving_side": "right",
        "weight": 41.301,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.378427, 43.650429],
            [-79.378396, 43.650353],
            [-79.377927, 43.649247],
            [-79.3779, 43.649181],
            [-79.377895, 43.649169],
            [-79.37789, 43.649156],
            [-79.377866, 43.649095],
            [-79.377781, 43.648892]
          ],
          "type": "LineString"
        }
      }, {
        "intersections": [{
          "bearings": [343],
          "entry": [true],
          "in": 0,
          "admin_index": 0,
          "geometry_index": 16,
          "location": [-79.377781, 43.648892]
        }],
        "maneuver": {
          "type": "arrive",
          "instruction": "Your destination is on the left.",
          "modifier": "left",
          "bearing_after": 0,
          "bearing_before": 163,
          "location": [-79.377781, 43.648892]
        },
        "name": "Yonge Street",
        "duration": 0,
        "distance": 0,
        "driving_side": "right",
        "weight": 0,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.377781, 43.648892],
            [-79.377781, 43.648892]
          ],
          "type": "LineString"
        }
      }],
      "distance": 331.242,
      "summary": "Adelaide Street West, Yonge Street"
    }],
    "geometry": {
      "coordinates": [
        [-79.380069, 43.649984],
        [-79.380104, 43.650068],
        [-79.378427, 43.650429],
        [-79.377781, 43.648892]
      ],
      "type": "LineString"
    }
  }
}, {
  "id": "route-2",
  "start": [-79.37697563636958, 43.65303473059163],
  "end": [-79.37321417901185, 43.653709119795394],
  "route": {
    "weight_name": "auto",
    "weight": 105.252,
    "duration": 73.197,
    "distance": 318,
    "legs": [{
      "admins": [{
        "iso_3166_1_alpha3": "CAN",
        "iso_3166_1": "CA"
      }],
      "weight": 105.252,
      "duration": 73.197,
      "steps": [{
        "intersections": [{
          "bearings": [164],
          "entry": [true],
          "mapbox_streets_v8": {
            "class": "street"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "geometry_index": 0,
          "location": [-79.37695, 43.653005]
        }],
        "maneuver": {
          "type": "depart",
          "instruction": "Drive south on Bond Street.",
          "bearing_after": 164,
          "bearing_before": 0,
          "location": [-79.37695, 43.653005]
        },
        "name": "Bond Street",
        "duration": 2.945,
        "distance": 9,
        "driving_side": "right",
        "weight": 3.387,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.37695, 43.653005],
            [-79.376923, 43.652938],
            [-79.376918, 43.652925]
          ],
          "type": "LineString"
        }
      }, {
        "intersections": [{
          "entry": [true, false],
          "in": 1,
          "bearings": [74, 344],
          "duration": 9.675,
          "turn_weight": 20,
          "turn_duration": 5.275,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 25.06,
          "geometry_index": 2,
          "location": [-79.376918, 43.652925]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 254],
          "duration": 16.978,
          "turn_weight": 0.5,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 20.017,
          "geometry_index": 3,
          "location": [-79.376661, 43.65298]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 254],
          "duration": 2.578,
          "turn_weight": 2,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 4.957,
          "geometry_index": 5,
          "location": [-79.375871, 43.65315]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 253],
          "duration": 3.807,
          "turn_weight": 2,
          "turn_duration": 2.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 4.07,
          "geometry_index": 8,
          "location": [-79.375756, 43.653175]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [74, 253],
          "duration": 7.028,
          "turn_weight": 2,
          "turn_duration": 0.008,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 10.073,
          "geometry_index": 11,
          "location": [-79.375637, 43.653201]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 254],
          "duration": 11.746,
          "turn_weight": 0.5,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 14,
          "geometry_index": 13,
          "location": [-79.37517, 43.6533]
        }, {
          "entry": [true, false],
          "in": 1,
          "bearings": [73, 253],
          "duration": 16.101,
          "turn_weight": 0.5,
          "turn_duration": 0.007,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "weight": 19.008,
          "geometry_index": 14,
          "location": [-79.37428, 43.653492]
        }, {
          "bearings": [74, 253],
          "entry": [true, false],
          "in": 1,
          "turn_weight": 2,
          "turn_duration": 0.008,
          "mapbox_streets_v8": {
            "class": "secondary"
          },
          "is_urban": true,
          "admin_index": 0,
          "out": 0,
          "geometry_index": 15,
          "location": [-79.37337, 43.653688]
        }],
        "maneuver": {
          "type": "turn",
          "instruction": "Turn left onto Queen Street East.",
          "modifier": "left",
          "bearing_after": 74,
          "bearing_before": 164,
          "location": [-79.376918, 43.652925]
        },
        "name": "Queen Street East",
        "duration": 70.251,
        "distance": 309,
        "driving_side": "right",
        "weight": 101.864,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.376918, 43.652925],
            [-79.376661, 43.65298],
            [-79.37605, 43.653112],
            [-79.375871, 43.65315],
            [-79.375858, 43.653153],
            [-79.375774, 43.653171],
            [-79.375756, 43.653175],
            [-79.375737, 43.653179],
            [-79.375656, 43.653197],
            [-79.375637, 43.653201],
            [-79.375406, 43.65325],
            [-79.37517, 43.6533],
            [-79.37428, 43.653492],
            [-79.37337, 43.653688],
            [-79.373241, 43.653715]
          ],
          "type": "LineString"
        }
      }, {
        "intersections": [{
          "bearings": [254],
          "entry": [true],
          "in": 0,
          "admin_index": 0,
          "geometry_index": 16,
          "location": [-79.373241, 43.653715]
        }],
        "maneuver": {
          "type": "arrive",
          "instruction": "You have arrived at your destination.",
          "bearing_after": 0,
          "bearing_before": 74,
          "location": [-79.373241, 43.653715]
        },
        "name": "Queen Street East",
        "duration": 0,
        "distance": 0,
        "driving_side": "right",
        "weight": 0,
        "mode": "driving",
        "geometry": {
          "coordinates": [
            [-79.373241, 43.653715],
            [-79.373241, 43.653715]
          ],
          "type": "LineString"
        }
      }],
      "distance": 318,
      "summary": "Bond Street, Queen Street East"
    }],
    "geometry": {
      "coordinates": [
        [-79.37695, 43.653005],
        [-79.376918, 43.652925],
        [-79.373241, 43.653715]
      ],
      "type": "LineString"
    }
  }
}]