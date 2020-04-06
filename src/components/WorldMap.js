import React from 'react';
import { ReactComponent as Map } from './world.svg';
import Table from './Table';

const WorldMap = () => {
  return (
    <div className='mapContainer'>
      <Map />
      <Table />
    </div>
  );
};

export default WorldMap;
