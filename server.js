import { createServer } from "node:http";
import { greet } from "./src/app.js";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(greet("DevOps"));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const port = Number(process.env.PORT ?? 3000);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
