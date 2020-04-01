import React from 'react';
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <section className='search'>
      <SearchInput />
      <div className='author'>
        <p>
          Made By{' '}
          <a href='https://www.toshkhujaev.com' target='_blank'>
            Jahongir
          </a>
        </p>
        <p>
          <a href='https://www.github.com/TJahongir/covid19' target='_blank'>
            Contribute
          </a>
        </p>
      </div>
    </section>
  );
};

export default Search;
