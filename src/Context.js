import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const url = 'https://covidapi.info/api/v1/country/UZB/latest';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let {result} = data;
        setData(result);
      });
  }, []);

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
