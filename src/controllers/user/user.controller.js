import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../middleware/async-handler.middleware.js";
import { User } from "../../models/user/user.model.js";
import { HttpException } from "../../utils/http.exception.js";
import { JwtHelper } from "../../utils/jwt.helper.js";
import { HashingHelpers } from "../../utils/hashing.helper.js";

export class UserController {
  static signUp = asyncHandler(async (req, res) => {
    const { full_name, phone_number, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      throw new HttpException(
        StatusCodes.CONFLICT,
        ReasonPhrases.CONFLICT,
        "This email already used"
      );
    }

    await User.create({
      full_name,
      phone_number,
      email,
      password: await HashingHelpers.generatePassword(password),
    });

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, msg: "Successfully signed up!" });
  });

  static login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new HttpException(
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED,
        "Invalid login credentials"
      );
    }

    if (user.password !== password) {
      throw new HttpException(
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED,
        "Invalid login credentials"
      );
    }
    const access_token = JwtHelper.sign(user._id);

    res.status(StatusCodes.OK).json({ success: true, access_token });
  });

  static getProfile = asyncHandler(async (req, res) => {
    console.log(req.body.user);
    res.status(StatusCodes.OK).json({ success: true, data: req.body.user });
  });
}
