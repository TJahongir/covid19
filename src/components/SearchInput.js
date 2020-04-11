import React, { useState } from 'react';

const SearchInput = () => {
  const [text, setText] = useState('');

  return (
    <input
      type="text"
      name="countrySearch"
      placeholder="Search for your Country..."
      className="countryInput"
      onChange={(e) => setText(e.target.value)}
    />
  );
};
export default SearchInput;
