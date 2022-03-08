import React from 'react';
import CountrySearch from './CountrySearch';
import Filters from './Filters';
import Navbar from './Navbar';

const Header = ({
  setDarMode,
  darMode,
  searchTerm,
  setSearchTerm,
  setRegion,
  countries,
  setCountries,
  isLoading,
  setIsLoading,
}) => {
  return (
    <header className="w-11/12  mx-auto">
      <div className="md:flex md:justify-between md:items-center">
        <CountrySearch
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          countries={countries}
          setCountries={setCountries}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Filters setRegion={setRegion} />
      </div>
    </header>
  );
};

export default Header;
