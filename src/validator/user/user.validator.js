import { body, param } from "express-validator";

export const addVal = () => [
  body("full_name", "Full name is required").notEmpty(),
  body("full_name", "Full name must be a string").isString(),

  body("phone_number", "Phone number is required").notEmpty(),
  body("phone_number", "Phone number must be valid").matches(
    /^\+?[0-9\s\-()]+$/
  ),

  body("email", "Email is required").notEmpty(),
  body("email", "Email must be a valid email address").isEmail(),

  body("password", "Password is required").notEmpty(),
  body("password", "Password must be a string").isString(),
  body("password", "Password must be at least 8 characters").isLength({
    min: 8,
  }),
];

export const updateVal = () => [
  body("full_name", "Full name must be a string").optional().isString(),
  body("phone_number", "Phone number must be valid").matches(
    /^\+?[0-9\s\-()]+$/
  ),
  body("email", "Email must be a valid email address").optional().isEmail(),
  body("password", "Password must be a string").optional().isString(),
  body("password", "Password must be at least 8 characters")
    .optional()
    .isLength({ min: 8 }),
];
