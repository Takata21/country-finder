import React from 'react';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

const Home = ({
  setSearchTerm,
  searchTerm,
  countries,
  setRegion,
  setCountries,
  initialCountries,
  isLoading,
  setIsLoading,
}) => {
  const sortCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });
  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setRegion={setRegion}
        countries={countries}
        setCountries={setCountries}
        initialCountries={initialCountries}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6 md:flex-row md:justify-evenly flex-wrap">
          {sortCountries?.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
