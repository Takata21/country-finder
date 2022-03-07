import React from 'react';
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
  const { flag, name, population, region, capital, alpha3Code } = country;
  return (
    <Link to={`/country/${alpha3Code}`} className="flex flex-col">
      <article className="w-60 m-auto pb-6 shadow-md shadow-DarkGrayTs dark:bg-DarkBlueT dark:text-WhiteT hover:  hover:shadow-DarkGrayT transition-all duration-500 rounded overflow-hidden">
        <img
          src={flag}
          alt=""
          className=" w-full h-32 xl:h-40 object-cover"
          // loading="lazy"
        />
        <div className="pl-3">
          <p className="capitalize my-4 font-bold xl:my-5">{name}</p>
          <p className="capitalize font-semibold ">
            Population:{' '}
            <span className="font-normal">
              {new Intl.NumberFormat('en-Us').format(population)}
            </span>
          </p>
          <p className="capitalize font-semibold">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="capitalize font-semibold">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
