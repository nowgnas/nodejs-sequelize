import express from "express";

import { userRouter } from "./routes/userRouter";

const app = express();

app.use(userRouter);

app.listen(5000, () => console.log("5000 is running"));
