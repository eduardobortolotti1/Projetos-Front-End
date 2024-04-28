import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://api.wheretheiss.at/v1"

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index.ejs", {data: ''})
});

app.get("/pesquisar", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "/satellites/25544");
    const location_data = response.data;
    const longitude = location_data['longitude'];
    const latitude = location_data['latitude']
    console.log(location_data);
    res.redirect(`https://www.google.com.br/maps/@${longitude},${latitude},12z`);
  }
  catch (error) {
    console.error(error);
    res.render("index.ejs", {data: "An error occurred with the API."})
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
