import React, { useEffect, useRef } from "react";
import { useState } from "react";

export const SearchBox = ({ data, onSelection }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSearchResults([]); // Clear search results
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

const handleSearch = (query) => {
  if (!data || !Array.isArray(data)) {
    // Handle the case where data is undefined or not an array
    return;
  }

  const filteredResults = data
    .filter((item) => item && item.nom && item.nom.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5); // Limit to the first 5 results
  setSearchResults(filteredResults);
};


  const handleSelection = (selectedItem) => {
    console.log("Selected item:", selectedItem); // Log the selected item to verify it's correct

    setSearchQuery(selectedItem.nom);
    onSelection(selectedItem.insee);
    setSearchResults([]); // Clear search results
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <input
        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search by nom..."
      />
      {searchResults.length > 0 && (
        <ul className="absolute z-10 w-full py-2 mt-1 bg-white border border-gray-300 rounded shadow-lg">
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelection(result)}
            >
              {result.nom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
