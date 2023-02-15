import React from 'react';
import Nav from '../components/Nav';

const Search = () => {
  return (
    <div>
      {window.location.pathname !== '/' && <Nav />}
      <h1>Search</h1>
      
    </div>
  );
}

export default Search;
