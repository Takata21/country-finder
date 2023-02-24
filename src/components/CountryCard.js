import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`} className="flex flex-col">
      <article className="pb-6 m-auto overflow-hidden transition-all duration-500 rounded shadow-md w-60 shadow-DarkGrayTs dark:bg-DarkBlueT dark:text-WhiteT hover: hover:shadow-DarkGrayT">
        <img
          src={country.flags[0]}
          alt={`flag of ${country?.name?.common}`}
          className="object-cover w-full h-32 xl:h-40"
          loading="lazy"
        />
        <div className="pl-3">
          <p className="my-4 font-bold capitalize xl:my-5">
            {country?.name?.common}
          </p>
          <p className="font-semibold capitalize ">
            Population:{' '}
            <span className="font-normal">
              {new Intl.NumberFormat('en-Us').format(country?.population)}
            </span>
          </p>
          <p className="font-semibold capitalize">
            Region: <span className="font-normal">{country?.region}</span>
          </p>
          <p className="font-semibold capitalize">
            Capital:{' '}
            <span className="font-normal">
              {country?.capital ? country?.capital[0] : 'does not have capital'}
            </span>
          </p>
        </div>
      </article>
    </Link>
  )
}

export default CountryCard
