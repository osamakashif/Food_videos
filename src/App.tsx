import { useState } from "react";
import { Recipe } from "./interface/Recipe";
import { readTSV } from "./helpers/file_reader";
import { tsvToJSON } from "./helpers/JSON_convertors";
import { recipeFromJSON } from "./helpers/recipe_creator";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  readTSV(process.env.REACT_APP_DATA_LINK as string).then(res => {
    let newRecipes: Recipe[] = []
    let jsonDataArray = tsvToJSON(res)
    for (let jsonData of jsonDataArray) {
      newRecipes.push(recipeFromJSON(jsonData))
    }
      setRecipes(newRecipes)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Recipes
        </p>
      </header>
    </div>
  );
}

export default App;
