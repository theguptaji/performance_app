import * as express from "express";
import { Request, Response } from "express";
import baseRouter from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', baseRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
