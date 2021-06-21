import http from "http";
import addUser from "../src/user";

import { hostname, port } from "./config";

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 403;
    return res.end();
  }

  if (req.url === "/addUser") {
    let body: Uint8Array[] = [];

    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        addUser(Buffer.concat(body).toString());
      });

    res.statusCode = 200;
    res.end("okay");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
