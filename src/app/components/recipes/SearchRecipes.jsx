import { useState } from "react";
import { searchRecipes } from "../../../utils/api";

const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const { data } = await searchRecipes(query);
    setResults(data.recipes);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;
