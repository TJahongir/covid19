import React, { createContext, useState, useEffect } from 'react';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);
  const [current, setCurrent] = useState('global');
  const [dates, setDates] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const globalCovidUrl = 'https://api.covid19api.com/summary';
  const localCovidUrl = `https://api.covid19api.com/dayone/country/${current}`;

  useEffect(() => {
    fetch(globalCovidUrl)
      .then((res) => res.json())
      .then((data) => {
        const { Global, Countries } = data;
        setCountries(Countries);
        setGlobal(Global);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (current !== 'global') {
      fetch(localCovidUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.map((dat) => {
            const { Country, Confirmed, Deaths, Recovered, Active } = dat;
            const stats = { Country, Confirmed, Deaths, Recovered, Active };
            setStatistics((statistics) => [...statistics, stats]);
            const date = dat.Date.slice(0, 10);
            setDates((dates) => [...dates, date]);
          });
          setLoading(false);
          //
        });
    }
  }, [current]);

  const countSeperator = (num) => num.toLocaleString();

  const currentChange = (countryName) => {
    setCurrent(countryName.toLowerCase().split(' ').join('-'));
    setLoading(true);
  };

  const value = {
    loading,
    global,
    countries,
    countSeperator,
    currentChange,
    dates,
    statistics,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
