import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";
import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signup(req, res) {
    const { name, email, password } = req.body;
    UserModel.signUp(name, email, password);
    res.status(200).send("SignUP Succesfully");
  }

  signin(req, res) {
    const { email, password } = req.body;
    const result = UserModel.signIn(email, password);
    // console.log(result)
    if (!result) {
      throw new AppLevelErrHandling("Invalid User", 400);
    } else {
      // create token
      const token = jwt.sign(
        {
          userId: result.id,
          email: result.email,
        },
        "hGubWprdGtEogPJP616dn9NiIRso6fQn",
        {
          expiresIn: "1h",
        }
      );
      // send token to client
      res.status(200).send(token);
    }

    // res.send(result)
  }
}
