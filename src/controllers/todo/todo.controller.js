import { v4 } from "uuid";
const todo = [];

export const todoAdd = (req, res) => {
  const { title, desc } = req.body;
  todo.push({ id: v4(), title, desc });
  res.status(201).json({ success: true, todo });
};

export const todoEdit = (req, res) => {
  const { title, desc } = req.body;
  const { id } = req.params;
  const index = todo.findIndex((val) => val.id === id);
  todo.splice(index, 1, { id, title, desc });
  res.status(200).json({ success: true, todo });
};

export const todoGetId = (req, res) => {
  const { id } = req.params;
  const data = todo.find((val) => val.id === id);
  res.status(200).json({ success: true, data });
};

export const todoGetAll = (req, res) => {
  const { search } = req.query;
  const data = todo.includes(search);
  console.log(data);
  res.status(200).json({ success: true, todo });
};

export const todoDelete = (req, res) => {
  const { id } = req.params;
  const index = todo.findIndex((item) => item.id === id);
  todo.splice(index, 1);
  res.status(200).json({ success: true, todo });
};
