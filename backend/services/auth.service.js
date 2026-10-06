import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail, insertUser } from "../DAL/users.dal.js";

export async function signUp(body) {
  const { username, password, email, role, assignedArena } = body;
  if (password.length <= 7) {
    const err = new Error("password too short");
    err.status = 400;
    throw err;
  }
  const passwordHash = await bcrypt.hash(password, 14);
  const createUser = await insertUser({ username, password: passwordHash, email, role, assignedArena });
  return createUser;
}

export function createToken(id, username, role, assignedArena) {
  const payload = { id, username, role, assignedArena };
  const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "1d" });
  return token;
}

export async function checkLogin(email, password) {
  const user = await getUserByEmail(email);
  if (!user) {
    const err = new Error("The email or password is incorrect.");
    err.status = 401;
    throw err;
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    const err = new Error("The email or password is incorrect.");
    err.status = 401;
    throw err;
  }
  const { id, username, role, assignedArena } = user;
  const token = createToken(id, username, role, assignedArena);
  return token
}
