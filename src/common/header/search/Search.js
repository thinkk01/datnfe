import React from "react";

const Search = () => {
  const submitHandler = (e) => {
    return 0;
  };
  return (
    <form className="flex-shrink-0">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block h-full p-4 w-[400px] text-sm text-gray-900 border border-gray-300 rounded-lg overflow-hidden bg-gray-50  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          placeholder="Search Product..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5  h-full  focus:outline-none right-0  bottom-0  rounded-lg text-sm px-4 py-1   "
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
