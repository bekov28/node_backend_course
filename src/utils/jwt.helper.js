import pkg from "jsonwebtoken";
const { sign, verify } = pkg;
import { JWT_SECRET } from "./secrets.js";

// The below code is to generate token;

export class JwtHelper {
  static sign = (id) => {
    return sign({ id }, JWT_SECRET, { expiresIn: "24h" });
  };
  //   The below code is to decode (verify) the token:
  static verify = (token) => {
    return verify(token, JWT_SECRET);
  };
}
