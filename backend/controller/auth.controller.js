import UserSchema from "../schema/user.schema.js";
import { checkLogin, createToken, signUp } from "../services/auth.service.js";

export async function register(req, res) {
    if (req.user.role != "admin") {
        const err = new Error("You do not have permission.")
        err.status = 403
        throw err
    }
  const body = UserSchema.safeParse(req.body);
  if (!body.success) {
    return res.status(400).send(body.error.message);
  }
  const create = await signUp(body.data);
  if (!create) {
    throw new Error("Error saving data");
  }
  const token = createToken(create.insertedId, body.data.role, body.data.assignedArena)
  res.status(201).send({success: true, token})
}


export async function login(req, res) {
    const {email, password} = req.body
    if (!email || !password){
        const err = new Error("invalid request")
        err.status = 400
        throw err
    }
    const token = await checkLogin(email, password)
    if (token) {
        res.send({success: true, token})
    }
}



export async function aboutMe(req, res) {
    const {username, role, assignedArena} = req.user
    res.send({username, role, assignedArena})
}

