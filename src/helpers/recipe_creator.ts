import { Recipe } from "../interface/Recipe";

export const recipeFromJSON = (jsonData: object): Recipe => {
    let recipe: Recipe = { name: "" } // Name is compulsory
    try {
      recipe.name = jsonData["Name" as keyof object]
      if (jsonData["YouTube" as keyof object] !== "") {
        recipe.youtube = jsonData["YouTube" as keyof object]
      }
      if (jsonData["Image" as keyof object] !== "") {
        recipe.image = jsonData["Image" as keyof object]
      }
      if (jsonData["Cuisine" as keyof object] !== "") {
        recipe.cuisine = jsonData["Cuisine" as keyof object]
      }
      if (jsonData["Website" as keyof object] !== "") {
        recipe.website = jsonData["Website" as keyof object]
      }
    } catch (e: unknown) {
      console.log(e)
    }
    return recipe
}