const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const readFileCallback = (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    };

    if (req.url === "/") {
      fs.readFile("index.html", readFileCallback);
    } else if (req.url === "/about") {
      fs.readFile("about.html", readFileCallback);
    } else if (req.url === "/contact-me") {
      fs.readFile("contact-me.html", readFileCallback);
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
