const http = require("http");
const PORT = 8000;
const fs = require("fs");
const express = require("express");

const app = express();

// Routes or END POINTS

app.get("/test", (req, res) => {
  res.send("hello world test Page");
});

app.get("/", (req, res) => {
  res.send("hello world Home Page");
});

// dynamic routing by identifying Parameters

app.get("/movies/:movie/year/:year", (req, res) => {
  console.log("Requested Movie Name is :" + req.params.movie);
  console.log("Requested Movie Year is :" + req.params.year);

  res.send(
    "Movie : " +
      req.params.movie.toLocaleUpperCase() +
      " and Year : " +
      req.params.year
  );
});

// Create Server Using Express Server
app.listen(PORT, () => {
  console.log("Server running through express at port " + PORT);
});

console.log("Server testing");

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
