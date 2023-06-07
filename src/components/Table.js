import React, { useState } from 'react';

const Table = ({ data }) => {
  const [filter, setFilter] = useState('');
  const filteredData = data.filter((item) => {
    if (filter && item[0].toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(([name, value], index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
