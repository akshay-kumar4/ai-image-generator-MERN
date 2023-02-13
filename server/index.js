import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./Routes/post.js";
import dalleRoutes from "./Routes/dalle.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/post", postRoutes), app.use("/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  connect();
  console.log("Server is running and connected to MongoDB!!");
});
