import React, { useContext } from 'react';
import { Context } from '../Context';

const Statistics = () => {
  // // Data
  // const { global, countSeperator, statistics } = useContext(Context);
  // const { TotalConfirmed, TotalDeaths, TotalRecovered } = global;
  // const { Confirmed, Deaths, Recovered, Active } = statistics[
  //   statistics.length - 1
  // ];
  // // Data Manipulation
  // const confirmed = Confirmed === undefined ? TotalConfirmed : Confirmed;
  // const deaths = Deaths === undefined ? TotalDeaths : Deaths;
  // const active =
  //   Active === undefined
  //     ? TotalConfirmed - TotalDeaths - TotalRecovered
  //     : Active;
  // const recovered = Recovered === undefined ? TotalRecovered : Recovered;

  // Result
  return (
    // <div className="statistics">
    //   <div className="confirmed">
    //     <h3 className="title">Confirmed</h3>
    //     <p className="dataNumber">{countSeperator(confirmed)}</p>
    //   </div>
    //   <div className="active">
    //     <h3 className="title">Active</h3>
    //     <p className="dataNumber">{countSeperator(active)}</p>
    //   </div>
    //   <div className="rest">
    //     <div className="recovered">
    //       <h3 className="title">Recovered</h3>
    //       <p className="dataNumber recovNum">{countSeperator(recovered)}</p>
    //     </div>
    //     <div className="deaths">
    //       <h3 className="title">Died</h3>
    //       <p className="dataNumber deathNum">{countSeperator(deaths)}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="statistics">Hello</div>
  );
};

export default Statistics;
