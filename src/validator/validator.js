import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  let messages = "";

  errors.array().map((err) => {
    messages += err.msg + ""; //messages = messages + err.msg + ""
  });

  res.status(422).json({ success: false, error: { messages } });
};
