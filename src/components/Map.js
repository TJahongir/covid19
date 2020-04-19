import React, { useState } from 'react';
import WorldMap from './WorldMap';
import ReactTooltip from 'react-tooltip';

const Map = () => {
  const [content, setContent] = useState('');
  return (
    <>
      <WorldMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
};

export default Map;
