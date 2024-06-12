import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [
          40, 30, 100, 90, 190, 190, 40, 90, 120, 90, 190, 190, 220, 90, 120,
          20, 190, 20,
        ],
      },
    ],
    options: {
      chart: {
        // height: 300,
        type: 'line',
      },
      stroke: {
        width: 4,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2000-11-01T00:00:00',
          '2000-12-01T00:00:00',
          '2001-01-01T00:00:00',
          '2001-02-01T00:00:00',
          '2001-03-01T00:00:00',
          '2001-04-01T00:00:00',
          '2001-05-01T00:00:00',
          '2001-06-01T00:00:00',
          '2001-07-01T00:00:00',
          '2001-08-01T00:00:00',
          '2001-09-01T00:00:00',
          '2001-10-01T00:00:00',
          '2001-11-01T00:00:00',
          '2001-12-01T00:00:00',
          '2002-01-01T00:00:00',
          '2002-02-01T00:00:00',
          '2002-03-01T00:00:00',
          '2002-04-01T00:00:00',
        ],
        tickAmount: 10,
        labels: {
          formatter(value, timestamp, opts) {
            const date = new Date(timestamp);
            return opts.dateFormatter(date, 'MMM');
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#303975'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: '#BC4172',
              opacity: 1,
            },
            {
              offset: 100,
              color: '#303975',
              opacity: 1,
            },
          ],
        },
      },
      toolbar: {
        show: false,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={230}
        />
      </div>
      <div id="html-dist" />
    </div>
  );
};

export default ApexChart;
