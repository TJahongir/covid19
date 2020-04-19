import React from 'react';
import Chart from './Chart';
import '../App.scss';
import Statistics from './Statistics';
import Map from './Map';

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <h1 className="mainTitle">Dashboard</h1>
      <div className="dashboardGrid">
        <Map />
        <Chart />
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
