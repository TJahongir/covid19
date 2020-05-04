import React, { useContext } from 'react';
import { Context } from '../Context';

const Statistics = () => {
  // Data
  const { global, countSeperator, statistics } = useContext(Context);
  const lastDayStats = statistics[statistics.length - 1];

  if (lastDayStats === undefined) {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = global;
    return (
      <div className="statistics">
        <div className="confirmed">
          <h3 className="title">Total Confirmed</h3>
          <p className="dataNumber">{countSeperator(TotalConfirmed)}</p>
        </div>
        <div className="active">
          <h3 className="title">Total Active</h3>
          <p className="dataNumber">
            {countSeperator(TotalConfirmed - TotalDeaths - TotalRecovered)}
          </p>
        </div>
        <div className="rest">
          <div className="recovered">
            <h3 className="title">Total Recovered</h3>
            <p className="dataNumber recovNum">
              {countSeperator(TotalRecovered)}
            </p>
          </div>
          <div className="deaths">
            <h3 className="title">Total Died</h3>
            <p className="dataNumber deathNum">{countSeperator(TotalDeaths)}</p>
          </div>
        </div>
      </div>
    );
  } else {
    const { Active, Confirmed, Country, Deaths, Recovered } = lastDayStats;
    return (
      <div className="statistics">
        <div className="confirmed">
          <h3 className="title">Confirmed in {Country}</h3>
          <p className="dataNumber">{countSeperator(Confirmed)}</p>
        </div>
        <div className="active">
          <h3 className="title">Active in {Country}</h3>
          <p className="dataNumber">{countSeperator(Active)}</p>
        </div>
        <div className="rest">
          <div className="recovered">
            <h3 className="title">Recovered in {Country}</h3>
            <p className="dataNumber recovNum">{countSeperator(Recovered)}</p>
          </div>
          <div className="deaths">
            <h3 className="title">Died in {Country}</h3>
            <p className="dataNumber deathNum">{countSeperator(Deaths)}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Statistics;
