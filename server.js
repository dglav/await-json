const http = require("node:http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  // Don't usually see the way this is implemented b/c Firebase Hosting handles all this for us
  if (req.method === "GET" && req.url === "/") {
    try {
      const filepath = path.join(__dirname, "/index.html");
      data = fs.readFileSync(filepath, "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");

      // res.setHeader("Content-Type", "text/plain; charset=utf-8");
      // Quiz: What will happen if we use this instead?
      // A: The browser will interpret it as plain text and not render the data as html.

      return res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end();
    }
  }

  // Quiz: Why is this path necessary?
  // A: Because additional resources are being requested after the original html was downloaded.
  if (req.method === "GET" && req.url === "/index.js") {
    try {
      const filepath = path.join(__dirname, "/index.js");
      data = fs.readFileSync(filepath, "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      return res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end();
    }
  }

  if (req.method === "GET" && req.url === "/json") {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Transfer-Encoding", "chunked");

      // Quiz: Is it necessary to join the file with the __dirname? Couldn't we just use a relative path? i.e. "./json.json"
      // A: Technically if we run the script from this directory it's fine, but if we run it from any other directory, it will error.
      // Basically, it's better to guarantee that the resource being sent is not dependent on where the script is executed.
      const filepath = path.join(__dirname, "/json.json");
      // const filepath = "./json.json";

      const readStream = fs.createReadStream(filepath, {
        encoding: "utf8",
      });

      readStream.on("readable", () => {
        setInterval(() => {
          const chunk = readStream.read(1);
          if (!chunk) {
            return res.end();
          }
          res.write(chunk);
        }, 1);
      });

      // Quiz: Is this necessary?
      // A: Not technically, but it can cause problems not to have it.
      // Example 1: Could lead to memory leaks because of improper cleanup
      // Example 2: Performance problems etc.
      readStream.on("end", () => {
        res.end();
      });

      // Quiz: Is this necessary?
      // A: No, but it is helpful for being able to handle errors gracefully.
      readStream.on("error", function (err) {
        throw err;
      });

      // Quiz: Is this necessary?
      // A: Yes, because otherwise the source code will keep on going on ent up returning a 404 status code and the request will not be successful.
      return;
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end();
    }
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  return res.end("Not Found\n");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at ${hostname}:${port}`);
});
