import React, { useContext, memo } from 'react';
import TableItem from './TableItem';
import { Context } from '../Context';

const Table = () => {
  // Bringing down the data
  const { countries } = useContext(Context);

  // Creating tabs

  // Displaying the Table
  return (
    <div className="tableWrap">
      <table className="table">
        <caption>Total Population</caption>
        <thead>
          <tr>
            <th className="table-header">Country</th>
            <th className="table-header">Confirmed</th>
            <th className="table-header">Active</th>
            <th className="table-header">Recovered</th>
            <th className="table-header">Died</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <TableItem country={country} key={country.CountryCode} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
