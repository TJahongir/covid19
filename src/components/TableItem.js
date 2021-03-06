import React, { useContext } from 'react';
import { Context } from '../Context';

const TableItem = ({
  country: { Country, TotalDeaths, TotalConfirmed, TotalRecovered },
}) => {
  const { countSeperator, currentChange } = useContext(Context);

  return (
    <tr className="countriesTr" onClick={() => currentChange(Country)}>
      <td className="countryName">{Country}</td>
      <td>{countSeperator(TotalConfirmed)}</td>
      <td>{countSeperator(TotalConfirmed - TotalDeaths - TotalRecovered)}</td>
      <td>{countSeperator(TotalRecovered)}</td>
      <td>{countSeperator(TotalDeaths)}</td>
    </tr>
  );
};

export default TableItem;
