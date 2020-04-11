import React, { useState } from 'react';

const TableItem = ({ country }) => {
  // I was not able to Destructure the variables, any luck?

  return (
    <tr className="countriesTr">
      <td>{country.Country}</td>
      <td>{country.TotalConfirmed}</td>
      <td>
        {country.TotalConfirmed - country.TotalDeaths - country.TotalRecovered}
      </td>
      <td>{country.TotalRecovered}</td>
      <td>{country.TotalDeaths}</td>
    </tr>
  );
};

export default TableItem;
