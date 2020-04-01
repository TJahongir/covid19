import React from 'react';
import { ReactComponent as Map } from './world.svg';
import TopList from './TopList';

const WorldMap = () => {
  return (
    <div className='map'>
      <Map />
      <TopList />
    </div>
  );
};

export default WorldMap;
