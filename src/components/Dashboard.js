import React from 'react';
import WorldMap from './WorldMap';
import Chart from './Chart';
import '../App.scss';
import Statistics from './Statistics';

const Dashboard = props => {
  return (
    <div className='dashboard'>
      <h1 className='mainTitle'>Dashboard</h1>
      <div className='dashboardGrid'>
        <WorldMap />
        <Chart />
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
