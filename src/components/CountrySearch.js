import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const CountrySearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative flex items-center my-7  shadow-md shadow-DarkGrayTs dark:bg-DarkBlueT dark:text-WhiteT">
      <AiOutlineSearch className="absolute mx-4" />
      <input
        type="text"
        className="w-full pl-10 p-1 dark:bg-DarkBlueT dark:text-WhiteT"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default CountrySearch;
