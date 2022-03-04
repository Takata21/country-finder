import React from 'react';
import CountrySearch from './CountrySearch';
import Filters from './Filters';
import Navbar from './Navbar';

const Header = ({ setDarMode, darMode, searchTerm, setSearchTerm }) => {
  return (
    <header className="w-11/12  mx-auto">
      <Navbar setDarMode={setDarMode} darMode={darMode} />
      <div className="xl:flex xl:justify-between xl:items-center">
        <CountrySearch setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
