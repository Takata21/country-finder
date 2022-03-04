import React from 'react';
const Filters = () => {
  return (
    <select className="p-2 bg-WhiteT mb-6 dark:bg-DarkBlueT dark:text-WhiteT focus:outline-none shadow-md shadow-DarkGrayTs">
      <option value="all">Filter by Region</option>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="asia">Asia</option>
      <option value="europa">Europa</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filters;
