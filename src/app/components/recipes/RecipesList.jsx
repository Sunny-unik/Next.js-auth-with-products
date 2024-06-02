"use client";

import { useEffect, useState } from "react";
import { getRecipes } from "../../../utils/api";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await getRecipes();
      setRecipes(data.recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <img alt={recipe.name} src={recipe.image} width={340} height={340} />
          <br />
          <h2 className="text-center text-xl font-bold">{recipe.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
