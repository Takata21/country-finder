import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Country from './Pages/Country';
import Home from './Pages/Home';
import { fetchData, API_URL_V3 } from '../src/Api/FetchData';
function App() {
  const [darMode, setDarMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState('');
  const [initialCountries, setInitialCountries] = useState([]);
  useEffect(() => {
    const getAllCountries = async () => {
      setIsLoading(true);
      const response = await fetchData(`${API_URL_V3}/all`);
      setCountries(response.data);
      setInitialCountries(response.data);
      setIsLoading(false);
    };
    getAllCountries();
  }, []);

  useEffect(() => {
    const getCountriesByRegion = async () => {
      if (region !== '') {
        if (region === 'all') {
          setIsLoading(true);
          setCountries(initialCountries);
          setIsLoading(false);
          return;
        }
        setIsLoading(true);
        const response = await fetchData(`${API_URL_V3}/region/${region}`);
        response.data.length > 0 && setCountries(response.data);
        setIsLoading(false);
      }
    };
    getCountriesByRegion();
  }, [region]);

  return (
    <div
      className={
        darMode
          ? 'dark bg-VeryDarkBlueT min-h-screen transition-colors duration-500'
          : 'bg-VeryLightGrayT min-h-screen transition-colors duration-500'
      }
    >
      <BrowserRouter>
        <Navbar setDarMode={setDarMode} darMode={darMode} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                countries={countries}
                isLoading={isLoading}
                setRegion={setRegion}
              />
            }
          />
          <Route path="/country/:alpha" exact element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
