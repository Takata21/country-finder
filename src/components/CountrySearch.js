import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { API_URL_V3, fetchData } from '../Api/FetchData';
const CountrySearch = ({
  countries,
  setCountries,
  initialCountries,
  isLoading,
  setIsLoading,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const getCountry = async () => {
      if (searchTerm !== '') {
        setIsLoading(true);
        const response = await fetchData(`${API_URL_V3}/name/${searchTerm}`);
        if (response.data !== null) {
          setCountries(response.data);
          console.log(response);
          setIsLoading(false);
        }
      }
      if (searchTerm === '' && !countries) {
        setIsLoading(true);
        setCountries(initialCountries);
        setIsLoading(false);
      }
    };

    getCountry();
  }, [searchTerm]);

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
