import React, { useState } from 'react';

interface SearchFn {
  search(data: string): void
}

export default function Search(props: SearchFn) {
  const [searchData, setSearchData] = useState('');

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.search(searchData);
    setSearchData('');
  };

  return (
    <form className="search">
      <input
        value={searchData}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}