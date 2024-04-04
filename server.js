const http = require("http");
const PORT = 8000;
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
// CREATE SERVER USING HTTP HOST
// http
//   .createServer((req, res) => {
//     switch (req.url) {
//       case "/":
//         const html = fs.readFileSync("./index.html", (err, data) => {
//           res.statusCode = 200;
//           res.setHeader("Content-Type", "text/html");
//           res.end("Hello from first code line");
//         });
//         res.write(html);
//         break;
//     }
//   })
//   .listen(PORT, (err, res) => {
//     console.log("Server is running at " + PORT);
//   });

const app = express();

// Implementing Mustache Express
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");

// set-UP the BodyParser

app.use(bodyParser.json());

// Routes or END POINTS

app.get("/test", (req, res) => {
  res.send("hello world test Page");
});

app.get("/", (req, res) => {
  res.render("index");
  // res.send("hello world Home Page");
});

// dynamic routing by identifying Parameters

app.get("/movies/:movie/year/:year", (req, res) => {
  res.send(
    "Movie : " +
      req.params.movie.toLocaleUpperCase() +
      " and Year : " +
      req.params.year
  );
});

// Querying parameters

app.get("/movies", (req, res) => {
  console.log(req.query.movie);
  res.send(req.query.movie);
});

// POST METHODS

app.post("/movies", (req, res) => {
  console.log(req.query.movie);
  res.send(req.body.title + " released in    " + req.body.year);
  res.send("OK");
  res.status(200);
});

// Create Server Using Express Server
app.listen(PORT, () => {
  console.log("Server running through express at port " + PORT);
});

console.log("Server testing");
