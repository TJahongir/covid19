import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Context } from '../Context';

const Chart = () => {
  // Bringing Down the Context
  const { dates, statistics } = useContext(Context);
  const confirmed = [];
  const recovered = [];
  const deaths = [];
  const active = [];
  statistics.map((stats) => {
    confirmed.push(stats.Confirmed);
    recovered.push(stats.Recovered);
    deaths.push(stats.Deaths);
    active.push(stats.Active);
  });
  // Data Manipulation
  const chartDates =
    dates.length > 30 ? dates.slice(dates.length - 30, dates.length) : dates;
  const chartConfirmed =
    confirmed.length > 30
      ? confirmed.slice(dates.length - 30, dates.length)
      : confirmed;
  const chartRecovered =
    recovered.length > 30
      ? recovered.slice(dates.length - 30, dates.length)
      : recovered;
  const chartDeaths =
    deaths.length > 30 ? deaths.slice(dates.length - 30, dates.length) : deaths;
  const chartActive =
    active.length > 30 ? active.slice(dates.length - 30, dates.length) : active;

  // Chart Data Configuration
  const chartData = {
    labels: chartDates,
    datasets: [
      {
        label: '# of Confirmed',
        data: chartConfirmed,
        borderColor: ['#00a8cc'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Active',
        data: chartActive,
        borderColor: ['#ffd31d'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Deaths',
        data: chartDeaths,
        borderColor: ['#eb0a0a'],
        fill: false,
        borderWidth: 2,
      },
      {
        label: '# of Recovered',
        data: chartRecovered,
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
