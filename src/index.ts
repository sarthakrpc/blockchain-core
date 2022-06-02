import express, { Express } from "express";
const cors = require("cors");
import {sendTransactionParams} from "./main"
const app: Express = express();
app.use(cors());
app.use(express.json());
app.post("/", (req: any, res: any) => {
//   console.log(req.body);
  res.send(JSON.stringify({ body: req.body }));
  const sentTime:string =(new Date().getTime()/1000).toFixed(0);
  sendTransactionParams(req.body, sentTime);
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});


