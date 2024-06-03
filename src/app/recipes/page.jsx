"use client";

import RecipesList from "../components/recipes/RecipesList";
import SearchRecipes from "../components/recipes/SearchRecipes";
import { useEffect, useState } from "react";
import { getRecipes } from "../../utils/api";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await getRecipes();
      setRecipes(data.recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <SearchRecipes setRecipes={setRecipes} />
      <br />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
