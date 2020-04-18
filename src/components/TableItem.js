import React from 'react';

const TableItem = ({
  country: { Country, TotalDeaths, TotalConfirmed, TotalRecovered },
}) => {
  // I was not able to Destructure the variables, any luck?

  return (
    <tr className="countriesTr">
      <td className="countryName">{Country}</td>
      <td>{TotalConfirmed}</td>
      <td>{TotalConfirmed - TotalDeaths - TotalRecovered}</td>
      <td>{TotalRecovered}</td>
      <td>{TotalDeaths}</td>
    </tr>
  );
};

export default TableItem;
