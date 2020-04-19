import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Context } from '../Context';

const Chart = () => {
  // Bringing Down the Context

  // Data Manipulation

  // Chart Data Configuration
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Confirmed',
        data: [12, 11, 10, 9, 8, 7],
        borderColor: ['#00a8cc'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Active',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: ['#ffd31d'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Deaths',
        data: [12, 14, 10, 0, 7, 12],
        borderColor: ['#eb0a0a'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Recovered',
        data: [6, 8, 2, 0, 1, 1],
        fill: false,
        borderColor: ['#4fd410'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Chart;
