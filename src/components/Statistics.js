import React, { useContext } from 'react';
import { Context } from '../Context';

const Statistics = () => {
  const allData = useContext(Context);

  return (
    <div className='statistics'>
      <div className='confirmed'>
        <h3 className='title'>Confirmed</h3>
        <p className='dataNumber'>10000</p>
      </div>
      <div className='active'>
        <h3 className='title'>Active</h3>
        <p className='dataNumber'>10000</p>
      </div>
      <div className='rest'>
        <div className='recovered'>
          <h3 className='title'>Recovered</h3>
          <p className='dataNumber recovNum'>10000</p>
        </div>
        <div className='deaths'>
          <h3 className='title'>Died</h3>
          <p className='dataNumber deathNum'>10000</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
