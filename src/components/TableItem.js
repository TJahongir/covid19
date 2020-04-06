import React from 'react';

const TableItem = ({ country, confirmed, recovered, died, active }) => {
  return (
    <tr>
      <td>{country}</td>
      <td>{confirmed}</td>
      <td>{active}</td>
      <td>{recovered}</td>
      <td>{died}</td>
    </tr>
  );
};

export default 'TableItem';
