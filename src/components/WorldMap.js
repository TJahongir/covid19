import React, { memo } from 'react';
import Table from './Table';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

// const rounded = (num) => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + 'Bn';
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + 'M';
//   } else {
//     return Math.round(num / 100) / 10 + 'K';
//   }
// };

const WorldMap = ({ setTooltipContent, currentChange }) => {
  return (
    <div className="mapContainer">
      <div className="worldMap">
        <ComposableMap data-tip="" projectionConfig={{ scale: 180 }}>
          <ZoomableGroup
            translateExtent={[
              [-100, 1000],
              [1000, 2000],
            ]}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      const text = `${NAME}`;
                      setTooltipContent(text);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    onClick={() => {
                      const { NAME } = geo.properties;
                      let name = NAME.toLowerCase().split(' ').join('-');
                      currentChange(
                        name === 'united-states-of-america'
                          ? (name = 'united-states')
                          : name
                      );
                    }}
                    style={{
                      default: {
                        fill: '#e1e1e1',
                        outline: 'none',
                        stroke: '#495057',
                        strokeWidth: '1',
                      },
                      hover: {
                        fill: '#495057',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <Table />
    </div>
  );
};

export default memo(WorldMap);
