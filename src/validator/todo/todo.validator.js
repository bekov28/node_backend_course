import { body, param } from "express-validator";

export const addValidator = () => [
  body("title", "Title is required").notEmpty(),
  body("title", "Title must be a string").isString(),
  body("desc", "Desc is required").notEmpty(),
  body("desc", "Desc must be a string").isString(),
];

export const updateValidator = () => [
  param('id, "Id is MongoID').isMongoId(),
  body("title", "Title must be a string").optional().isString(),
  body("desc", "Desc must be a string").optional().isString(),
];
