import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  placeholder: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearchChange,
}) => (
  <div className="flex items-center gap-2 p-2 w-full max-w-md bg-blue-50 rounded-lg shadow-md">
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-3 py-2 text-base border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onSearchChange}
    />
    <FontAwesomeIcon icon={faSearch} className="text-gray-500 cursor-pointer" />
  </div>
);

export default SearchBar;
