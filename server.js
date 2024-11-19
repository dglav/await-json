const http = require("node:http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    try {
      const filepath = path.join(__dirname, "/index.html");
      data = fs.readFileSync(filepath, "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");

      // res.setHeader("Content-Type", "text/plain; charset=utf-8");
      // クイズ：代わりにこれを使用するとどうなりますか？

      return res.end(data);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end();
    }
  }

  // クイズ：なぜこのパスが必要なのですか？
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

      // クイズ：ファイルを__dirnameと結合する必要がありますか？相対パスを使用できないのでしょうか？例：「./json.json」
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

      // クイズ：これは必要ですか？
      readStream.on("end", () => {
        res.end();
      });

      // クイズ：これは必要ですか？
      readStream.on("error", function (err) {
        throw err;
      });

      // クイズ：これは必要ですか？
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
  console.log(`サーバーが ${hostname}:${port} で実行中です`);
});
