import AnimalList from "./AnimalList.jsx";
import AnimalListProps from "./AnimalListProps.jsx";
import "./App.css";
import Greeting from "./Greeting.jsx";
import RecipeList from "./Recipes.jsx";
import TestTitle from "./TestTitle.jsx";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>My first React app</p>
      <Greeting />
      <TestTitle />

      <AnimalList />
      <AnimalListProps />

      <RecipeList />
    </>
  );
}

export default App;
