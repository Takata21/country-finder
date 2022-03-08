import React from 'react';
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="flex flex-col">
      <article className="w-60 m-auto pb-6 shadow-md shadow-DarkGrayTs dark:bg-DarkBlueT dark:text-WhiteT hover:  hover:shadow-DarkGrayT transition-all duration-500 rounded overflow-hidden">
        <img
          src={country.flags[0]}
          alt={`flag of ${country.name.common}`}
          className=" w-full h-32 xl:h-40 object-cover"
          loading="lazy"
        />
        <div className="pl-3">
          <p className="capitalize my-4 font-bold xl:my-5">
            {country.name.common}
          </p>
          <p className="capitalize font-semibold ">
            Population:{' '}
            <span className="font-normal">
              {new Intl.NumberFormat('en-Us').format(country.population)}
            </span>
          </p>
          <p className="capitalize font-semibold">
            Region: <span className="font-normal">{country.region}</span>
          </p>
          <p className="capitalize font-semibold">
            Capital:{' '}
            <span className="font-normal">
              {country.capital ? country.capital[0] : 'does not have capital'}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
