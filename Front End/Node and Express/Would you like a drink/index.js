import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/random", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random.php");
    const drinkName = response.data.drinks[0].strDrink;
    res.redirect("/drinkSearch?strDrink=" + drinkName);
  } catch (error) {
    console.error(error);
    res.render("index.ejs");
  }
});

app.get("/drinkSearch", async (req, res) => {
  //Checks if query parameters are incorrect.
  const drinkName = req.query.strDrink;
  if (!drinkName) {
    res.status(400).send("Code 400 bad Request.");
  } else {
    try {
      const response = await axios.get(API_URL + "/search.php?s=" + drinkName);
      const drinkInfo = response.data.drinks[0];
      res.redirect("drink.ejs", { drinkinfo: drinkInfo });
    } catch (error) {
      console.error(error);
      res.render("index.ejs");
    }
  }
});

app.get("/drink", async (req, res) => {
  const drinkName = req.query.strDrink;

  const response = await axios.get(API_URL + "/random.php");

  console.log();
  res.render("drink.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
