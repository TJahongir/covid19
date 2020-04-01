import React from 'react';
import WorldMap from '../components/WorldMap';
import Chart from '../components/Chart';
import './Pages.scss';
import Statistics from '../components/Statistics';

const Dashboard = props => {
  return (
    <div className='dashboardWrap'>
      <h1>Dashboard</h1>
      <div className='dashboardGrid'>
        <WorldMap />
        <Chart />
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
