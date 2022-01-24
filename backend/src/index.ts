import * as express from "express";
import { Request, Response } from "express";
import baseRouter from "./routes";
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/', baseRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
