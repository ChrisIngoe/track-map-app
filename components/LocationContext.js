import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const setNewLocations = (newLocations) => {
    setLocations(newLocations);
  };

  return <LocationContext.Provider value={{ locations, setNewLocations }}>{props.children}</LocationContext.Provider>;
};

export default LocationProvider;
