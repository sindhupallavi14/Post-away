import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";

export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static signUp(name, email, password) {
    const verifyUser = users.find((user) => user.email == email);
    if (verifyUser) {
      throw new AppLevelErrHandling("User Already exists", 401);
    } else {
      const newUser = new UserModel(users.length + 1, name, email, password);
      users.push(newUser);
    }
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    if (user) {
      return user;
    }
    return "Unauthorized";
  }
}

var users = [
  new UserModel("1", "sindhu", "sindhu14@gmail.com", "Sindhu@14"),
  new UserModel("2", "kethan", "kethan09@gmail.com", "Kethan@09"),
];
