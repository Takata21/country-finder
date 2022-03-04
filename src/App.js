import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Country from './Pages/Country';
import Home from './Pages/Home';
function App() {
  const [darMode, setDarMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div
      className={
        darMode
          ? 'dark bg-VeryDarkBlueT min-h-screen transition-colors duration-500'
          : 'bg-VeryLightGrayT min-h-screen transition-colors duration-500'
      }
    >
      <BrowserRouter>
        <Header
          setDarMode={setDarMode}
          darMode={darMode}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/country/:id" exact element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
