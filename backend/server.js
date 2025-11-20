import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import { todoRouter } from "./routers/todoRouter.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

app.use("/todos", todoRouter)
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT)
})
