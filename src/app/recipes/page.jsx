import RecipesList from "../components/recipes/RecipesList";

const RecipesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <RecipesList />
    </div>
  );
};

export default RecipesPage;
