import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const Graph = ({ data }) => {
  const [filter, setFilter] = useState('');
  const filteredData = data.filter((item) => {
    if (filter && item[0].toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    return true;
  });
  const chartData = [['Name', 'Value'], ...filteredData.map(([name, value]) => [name, value])];

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Chart
        chartType="BarChart"
        data={chartData}
        options={{
          title: 'Graph',
          hAxis: {
            title: 'Value',
          },
          vAxis: {
            title: 'Name',
            minValue: 0,
          },
        }}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default Graph;
