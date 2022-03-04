import React from 'react';
import { Link } from 'react-router-dom';
const CountryCard = () => {
  return (
    <Link to="/country/hdsfljskdf" className="flex flex-col">
      <article className="w-60 m-auto pb-6 shadow-md shadow-DarkGrayTs dark:bg-DarkBlueT dark:text-WhiteT hover:  hover:shadow-DarkGrayT transition-all duration-500 rounded overflow-hidden">
        <img
          src="https://flagcdn.com/w320/us.png"
          alt=""
          className="h-32 xl:h-40 object-fill"
        />
        <div className="pl-3">
          <p className="capitalize my-4 font-bold xl:my-5">
            United State of America
          </p>
          <p className="capitalize font-semibold ">
            Population: <span className="font-normal">323,947,000</span>
          </p>
          <p className="capitalize font-semibold">
            Region: <span className="font-normal">America</span>
          </p>
          <p className="capitalize font-semibold">
            Capital: <span className="font-normal">Brasilia</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryCard;
