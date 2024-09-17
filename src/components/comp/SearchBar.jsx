import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center border-l-2 border-gray-300 pl-5">
      <FaSearch className="text-gray-500 mr-3" />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full text-gray-700"
      />
      <FaBell className=" ml-2" />
    </div>
  );
};

export default SearchBar;
