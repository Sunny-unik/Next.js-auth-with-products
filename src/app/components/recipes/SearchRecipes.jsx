import { useState } from "react";
import { searchRecipes } from "../../../utils/api";

const SearchRecipes = ({ setRecipes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const { data } = await searchRecipes(query);
    setRecipes(data.recipes);
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto flex items-baseline">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes"
        className="w-full p-2 border border-gray-300 rounded text-black"
      />
      <button
        onClick={handleSearch}
        className="mx-2 p-2 bg-blue-500 text-white rounded"
      >
        Q
      </button>
    </div>
  );
};

export default SearchRecipes;
