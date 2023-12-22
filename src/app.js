import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); //For Managing JSON in request
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
); //For Managing Encoded URL's
app.use(express.static("public")); //Manage Static assets

import userRouter from "./routes/get_card_status.routes.js";

//import declaration
app.use("/api", userRouter);

export { app };
