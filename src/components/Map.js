import React, { useState, useContext } from 'react';
import WorldMap from './WorldMap';
import ReactTooltip from 'react-tooltip';
import { Context } from '../Context';

const Map = () => {
  const { currentChange } = useContext(Context);
  const [content, setContent] = useState('');
  return (
    <>
      <WorldMap setTooltipContent={setContent} currentChange={currentChange} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
};

export default Map;
