import React from 'react';
const Filters = ({ setRegion }) => {
  return (
    <select
      className="p-2 bg-WhiteT mb-6 dark:bg-DarkBlueT dark:text-WhiteT focus:outline-none shadow-md shadow-DarkGrayTs md:m-0"
      onChange={(e) => {
        setRegion(e.target.value);
      }}
    >
      <option value="all">Filter by Region</option>
      <option value="all">All</option>
      <option value="Americas">Americas</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filters;
