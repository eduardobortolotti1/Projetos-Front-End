import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/random", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random.php");
    const idDrink = response.data.drinks[0].idDrink;
    res.redirect("/drink" + "?idDrink=" + idDrink);
  } catch (error) {
    console.error(error);
    res.render("index.ejs");
  }
});

app.get("/drink", async (req, res) => {
  //Checks if query parameters are incorrect.
  const idDrink = req.query.idDrink;
  if (!idDrink) {
    res.status(400).send("Code 400 bad Request.");
  }
  try {
    //Makes a request to grab all info of the drink from its ID
    const response = await axios.get(API_URL + "/lookup.php?i=" + idDrink);
    const drinkInfo = await response.data.drinks[0];
    const ingredient_IDs = {};

    //Takes every strIngredient and makes an API call to identify its ID, individually.
    for (let key in drinkInfo) {
      if (key.startsWith("strIngredient") && drinkInfo[key]) {
        let response = await axios.get(
          API_URL + "/search.php?i=" + drinkInfo[key]
        );
        let data = response.data;

        ingredient_IDs[key] = data.ingredients[0].idIngredient;
      }
    }

    res.render("drink.ejs", {
      drinkInfo: drinkInfo,
      ingredient_IDs: ingredient_IDs,
    });
  } catch (error) {
    console.error(error);
    res.render("index.ejs");
  }
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
});

app.post("/search", async (req, res) => {
  const search_name = req.body.search_name;
  try {
    const response = await axios.get(API_URL + "/search.php?s=" + search_name);
    const search_results = response.data;
    res.render("search.ejs", {
      searchData: search_results,
      search_name: search_name,
    });
  } catch (error) {
    console.error(error);
    res.render("/search.ejs");
  }
});

app.get("/ingredient", async (req, res) => {
  //Checks if query parameters are incorrect.
  const ingredientID = req.query.ingredientID;
  if (!ingredientID) {
    res.render("ingredient.ejs");
  }

  try {
    //Makes a request to grab all info of the ingredient from its ID
    const response = await axios.get(
      API_URL + "/lookup.php?iid=" + ingredientID
    );
    const ingredientInfo = response.data.ingredients[0];

    const filtered_drinks_search = (
      await axios.get(API_URL + "/filter.php?i=" + ingredientInfo.strIngredient)
    ).data.drinks;

    res.render("ingredient.ejs", {
      ingredientInfo: ingredientInfo,
      filtered_drinks_search: filtered_drinks_search,
    });
  } catch (error) {
    console.error(error);
    res.render("index.ejs");
  }
});

app.post("/ingredient-search", async (req, res) => {
  //Checks if query parameters are incorrect.
  const ingredientName = req.body.search_name;
  console.log()
  if (!ingredientName) {
    res.status(400).send("Code 400 bad Request.");
  }

  try {
    //Makes a request to grab all info of the ingredient from its ID
    const response = await axios.get(
      API_URL + "/search.php?i=" + ingredientName
    );
    const data = response.data;

    const ingredientID = data.ingredients[0].idIngredient;
    res.redirect("/ingredient?ingredientID=" + ingredientID);

  } catch (error) {
    console.error(error);
    res.render("index.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
