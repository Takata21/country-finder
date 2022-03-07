import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { API_URL, fetchData } from '../Api/FetchData';
import Spinner from '../components/Spinner';
const Country = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState('');
  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);
      const response = await fetchData(`${API_URL}/alpha/${params.alpha}`);
      setCountry(response.data);
      setIsLoading(false);
    };
    getCountry();
  }, [params]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-11/12 m-auto  dark:text-WhiteT">
          <Link
            to="/"
            className="flex items-center justify-center p-1 my-7 gap-2  shadow-md shadow-DarkGrayTs hover:shadow-DarkGrayT transition-all duration-500 dark:bg-DarkBlueT dark:text-WhiteT xl:text-xl md:w-36"
          >
            <HiOutlineArrowNarrowLeft />
            Back
          </Link>
          <div className="xl:flex xl:justify-around xl:items-center ">
            <img
              src={country.flag}
              alt=""
              className="w-full object-fill md:max-w-xs md:h-48 xl:max-w-lg h-96 xl:object-fill xl:items-center"
            />
            <div className="">
              <div className="">
                <h6 className="my-6 font-extrabold text-lg xl:my-0">
                  {country.name}
                </h6>
                <div className="">
                  <div className="">
                    <p className="font-bold my-1">
                      Native Name:
                      <span className="font-normal"> {country.nativeName}</span>
                    </p>
                    <p className="font-bold my-1">
                      Population:
                      <span className="font-normal"> {country.population}</span>
                    </p>
                    <p className="font-bold my-1">
                      Region:
                      <span className="font-normal"> {country.region}</span>
                    </p>
                    <p className="font-bold my-1">
                      Sub Region:
                      <span className="font-normal">{country.subregion}</span>
                    </p>
                    <p className="font-bold my-1">
                      Capital:
                      <span className="font-normal"> {country.capital}</span>
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold my-1">
                      Tp Level Domain: <span className="font-normal">be</span>
                    </p>
                    <p className="font-bold my-1">
                      Currencies:{' '}
                      <span className="font-normal">
                        {' '}
                        {country?.currencies[0].name}
                      </span>
                    </p>
                    <div className="flex items-center gap-2 font-bold my-1">
                      <p>Language:</p>
                      {country.languages?.map((language, index) => {
                        return <p className="font-normal">{language.name}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 md:flex md:items-center md:gap-4">
                <p className="text-lg font-bold"> Border Countries:</p>
                <div className="flex justify-evenly  xl:items-center ">
                  {country.borders?.map((border, index) => (
                    <Link
                      key={index}
                      to={`/country/${border}`}
                      className="flex items-center justify-center p-1  gap-2  shadow-md shadow-DarkGrayTs hover:shadow-DarkGrayT transition-all duration-500 dark:bg-DarkBlueT dark:text-WhiteT"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
