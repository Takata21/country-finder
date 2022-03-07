import React from 'react';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

const Home = ({
  setSearchTerm,
  searchTerm,
  isLoading,
  countries,
  setRegion,
}) => {
  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setRegion={setRegion}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6 md:flex-row md:justify-evenly flex-wrap">
          {countries.map((country, index) => (
            <CountryCard country={country} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
