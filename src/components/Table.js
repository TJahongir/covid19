import React from 'react';
import TableItem from './TableItem';
import Context from '../Context';

const Table = () => {
  const tableItems = '';

  return (
    <div className='tableWrap'>
      <table className='table'>
        <caption>Total Population</caption>
        <tr>
          <th className='table-header'>Country</th>
          <th className='table-header'>Confirmed</th>
          <th className='table-header'>Active</th>
          <th className='table-header'>Recovered</th>
          <th className='table-header'>Died</th>
        </tr>
        {tableItems}
      </table>
    </div>
  );
};

export default Table;
