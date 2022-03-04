import React from 'react';
import { Link } from 'react-router-dom';
import { BsMoon } from 'react-icons/bs';

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
const Navbar = ({ setDarMode, darMode }) => {
  return (
    <nav className="flex p-4 justify-between shadow-md shadow-DarkGrayTs dark:bg-DarkBlueT">
      <Link to="/" className="font-extrabold dark:text-WhiteT xl:text-xl">
        Where in the world?
      </Link>

      <button
        className="flex items-center gap-2 font-semibold dark:text-WhiteT"
        onClick={() => setDarMode(!darMode)}
      >
        <BsMoon />
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
