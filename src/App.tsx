import { useState } from "react";
import { Recipe } from "./interface/Recipe";
import { readTSV } from "./helpers/file_reader";
import { tsvToJSON } from "./helpers/JSON_convertors";
import { recipeFromJSON } from "./helpers/recipe_creator";
import { CircularProgress, Grid, Typography } from '@mui/material';
import { RecipeCard } from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  readTSV(process.env.REACT_APP_DATA_LINK as string).then(res => {
    let newRecipes: Recipe[] = []
    let jsonDataArray = tsvToJSON(res)
    for (let jsonData of jsonDataArray) {
      newRecipes.push(recipeFromJSON(jsonData))
    }
    if (!loaded) {
      setRecipes(newRecipes)
      setLoaded(true)
    }
  })
  return (
    <>
      <header>
        <Typography variant="h2" textAlign={"center"} sx={{ marginTop: "2%", marginBottom: "2%" }}>Food videos</Typography>
      </header>
      <Grid container spacing={1} justifyContent={"center"}>
        {!loaded && <CircularProgress />}
        {recipes.map((recipe, index) => {
          return (
            <Grid key={index} item xs={10} sm={8} md={5} lg={4} xl={3} display={"flex"} justifyContent={"center"}>
              <RecipeCard {...recipe} />
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}

export default App;
