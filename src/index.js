import express from "express";
import listEndpoints from "express-list-endpoints";
import { join } from "path";
import {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  badRequestHandler,
  catchAllHandler,
} from "./errorHandling.js";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use("/movies", () => console.log("hi"));
app.use("/services", () => console.log("hi"));

app.use(notFoundHandler);
app.use(unauthorizedHandler);
app.use(forbiddenHandler);
app.use(badRequestHandler);
app.use(catchAllHandler);

console.table(listEndpoints(app));

app.listen(port, console.log("server is listening on port " + port));
