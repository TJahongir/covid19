import React from 'react';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <section className='search'>
      <SearchInput />
      <div className='author'>
        <p>
          Made By{' '}
          <a href='www.toshkhujaev.com' target='_blank'>
            Jahongir
          </a>
        </p>
        <p>
          <a href='www.github.com/TJahongir/covid-19.git' target='_blank'>
            Contribute
          </a>
        </p>
      </div>
    </section>
  );
};

export default Search;
