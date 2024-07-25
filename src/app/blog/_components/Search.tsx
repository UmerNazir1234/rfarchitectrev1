import React from "react";

const Search = () => {
  return (
    <div className="relative mb-4  inline-block lg:w-1/2 w-full">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        className="input--field !text-black !rounded-full !py-3 !px-6 !border-[#B3BEE7]"
      />
    </div>
  );
};

export default Search;
