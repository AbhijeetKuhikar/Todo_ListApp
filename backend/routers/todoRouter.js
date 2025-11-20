import express from "express"
import { Todo } from "../models/Todo.js"
export const todoRouter = express.Router();

// Router to get all
todoRouter.get("/", async (req, res) => {
  const todos = await Todo.find()
  res.json(todos);
})

// Router to create todo
todoRouter.post("/", async (req, res) => {
  const todo = await Todo.create({ text: req.body.text })
  res.json(todo);
})

// Router to update todo
todoRouter.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  res.json(todo)
})

// Router to toggle complete todo
todoRouter.patch("/:id/toggle", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save()
  res.json(todo)
})

// Router to delete to-do
todoRouter.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" })
})
