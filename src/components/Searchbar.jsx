import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-4 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        搜索
      </label>
      <div className="flex flex-row items-center justify-start">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="想听什么？"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 max-w-md px-4 py-2 ml-2 text-base text-white placeholder-gray-500 bg-gray-700 border-none outline-none rounded-3xl"
        />
      </div>
    </form>
  );
};

export default Searchbar;
