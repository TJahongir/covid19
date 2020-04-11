import React, { useContext } from 'react';
import { Context } from '../Context';

const Statistics = () => {
  // Data
  const { global } = useContext(Context);
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = global;
  // Data Manipulation

  // Result
  return (
    <div className="statistics">
      <div className="confirmed">
        <h3 className="title">Confirmed</h3>
        <p className="dataNumber">{TotalConfirmed}</p>
      </div>
      <div className="active">
        <h3 className="title">Active</h3>
        <p className="dataNumber">
          {TotalConfirmed - TotalDeaths - TotalRecovered}
        </p>
      </div>
      <div className="rest">
        <div className="recovered">
          <h3 className="title">Recovered</h3>
          <p className="dataNumber recovNum">{TotalRecovered}</p>
        </div>
        <div className="deaths">
          <h3 className="title">Died</h3>
          <p className="dataNumber deathNum">{TotalDeaths}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
