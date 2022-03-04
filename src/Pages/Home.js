import React from 'react';
import CountryCard from '../components/CountryCard';

const Home = () => {
  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:justify-evenly">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default Home;
