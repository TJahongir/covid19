import React, { createContext, useState, useEffect } from 'react';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [global, setGlobal] = useState({});
  const [countries, setCountries] = useState([]);

  const covidUrl = 'https://api.covid19api.com/summary';

  useEffect(() => {
    fetch(covidUrl)
      .then((res) => res.json())
      .then((data) => {
        const { Global, Countries } = data;
        setGlobal(Global);
        setCountries(Countries);
        setLoading(false);
      });
  }, []);

  console.log(countries);

  const value = {
    loading,
    global,
    countries,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
