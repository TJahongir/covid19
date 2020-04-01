import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Context } from '../Context';

const Chart = () => {
  const allData = useContext(Context);
  console.log(allData['2020-03-31']);
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Active Patients',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)']
      }
    ]
  };

  return (
    <div className='chart'>
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Chart;
