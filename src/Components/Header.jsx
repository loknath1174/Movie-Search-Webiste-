import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/movie?search=${searchInput}`);
      setSearchInput("");
      setIsOpen(false); // close mobile menu after search
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        
        {/* Logo (Left) */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">CineVibez</Link>
        </div>

        {/* Navbar (Center for desktop) */}
        <nav className="hidden md:flex gap-6 items-center text-white absolute left-1/2 transform -translate-x-1/2">
          <Link to="/home" className="hover:text-blue-400">Home</Link>
          <Link to="/movie" className="hover:text-blue-400">List Movies</Link>
          <Link to="/webseries" className="hover:text-blue-400">Web Series</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
        </nav>

        {/* Right side (Search + Hamburger) */}
        <div className="flex items-center gap-4 text-white">
          {/* Desktop search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-l-lg text-white focus:outline-none w-40 md:w-56"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="bg-gray-400 px-3 rounded-r-lg">
              Go
            </button>
          </form>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 px-6 py-4 flex flex-col gap-4 text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/movie" onClick={() => setIsOpen(false)}>List Movies</Link>
          <Link to="/webseries" onClick={() => setIsOpen(false)}>Web Series</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="flex mt-3">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded-l-lg text-white w-full"
            />
            <button type="submit" className="bg-yellow-400 px-3 rounded-r-lg">
              Go
            </button>
          </form>
        </nav>
      )}
    </header>
  );
};

export default Header;
