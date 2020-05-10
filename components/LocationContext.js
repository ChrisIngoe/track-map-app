import React, { createContext, useState } from 'react';
import PostLocation from '../services/api';

export const LocationContext = createContext();

const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const setNewLocations = (newLocations) => {
    setLocations(newLocations);
    if (newLocations && newLocations.length > 0) PostLocation(locations[0]);
  };

  return <LocationContext.Provider value={{ locations, setNewLocations }}>{props.children}</LocationContext.Provider>;
};

export default LocationProvider;
