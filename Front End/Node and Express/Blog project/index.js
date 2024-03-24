import express, { json } from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import { render } from "ejs";

const app = express();
const port = 3000;

var postCount = 0;
var postData = {
  postCount: postCount,
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
  res.render("index.ejs", {postData: postData});
});

app.post("/submit", (req, res) => {
  postCount++;

  postData["postName" + postCount] = req.body.postName;
  postData["postContent" + postCount] = req.body.postContent;
  postData["postCount"] = postCount;

  console.log("POST REQUEST" + JSON.stringify(postData));

  res.render("index.ejs", {postData: postData});
})

app.patch("/submit", (req, res) => {
  console.log("PATCH REQUEST" + JSON.stringify(req.body));

  postData["postName" + req.body.idNumber] = req.body.postName;  
  postData["postContent" + req.body.idNumber] = req.body.postContent;
  console.log(JSON.stringify(req.body.idNumber))
  
  res.render("index.ejs", {postData: postData});
});

app.delete("/submit", (req, res) => {
  console.log("DELETE REQUEST");
  
  var idNumber = req.query.idNumber;

  // console.log(idNumber);

  delete postData["postName" + idNumber];
  delete postData["postContent" + idNumber];

  //Prevents postCount from going negative if user spam clicks
  if (postData["postCount"] > 0){
    postData["postCount"] -= 1;
  } else {
    postData["postCount"] = 0;
  }
  
  console.log("Postcount: " + postCount);
  console.log("POSTDATA: " + JSON.stringify(postData));


  res.json({ message: 'Post deleted successfully' });
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
