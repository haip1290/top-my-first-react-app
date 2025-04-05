import { recipes } from "./data.js";
import { Fragment } from "react";

export default function RecipeList() {
  const recipesList = recipes.map((recipe) => (
    <Fragment key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </Fragment>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipesList}</ul>
    </div>
  );
}
