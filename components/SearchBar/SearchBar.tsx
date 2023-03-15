import { BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';

export const SearchBar = () => {
  return (
    <form className="flex flex-col gap-5 p-6 mx-auto max-w-4xl rounded-md md:p-4 bg-dark-400 md:flex-row">
      <div className="flex gap-2 items-center md:flex-1">
        <BiSearch className="text-xl" />
        <input
          className="p-2 w-full bg-transparent"
          placeholder="Keyword"
          type="text"
        />
      </div>
      <div className="flex gap-2 items-center md:flex-1">
        <GoLocation className="text-xl" />
        <input
          className="p-2 w-full bg-transparent"
          placeholder="Location"
          type="text"
        />
      </div>
      <button className="inline-block px-5 py-2 w-full font-semibold text-center rounded-md md:w-28 bg-accent-400 focus:outline-accent-400 hover:bg-accent-500">
        Search
      </button>
    </form>
  );
};
