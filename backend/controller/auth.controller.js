import { getAllUsers, deleteUserById } from "../DAL/users.dal.js";
import UserSchema from "../schema/user.schema.js";
import { checkLogin, createToken, signUp } from "../services/auth.service.js";

export async function register(req, res) {
    if (req.user.role != "admin") {
        return res.status(403).send("You do not have permission.")
    }
  const body = UserSchema.safeParse(req.body);
  if (!body.success) {
    return res.status(400).send(body.error.message);
  }
  const create = await signUp(body.data);
  if (!create) {
    return res.status(500).send("Error saving data")
  }
  const token = createToken(create.insertedId, body.data.role, body.data.assignedArena)
  res.status(201).send({success: true, token})
}


export async function login(req, res) {
    const {email, password} = req.body
    if (!email || !password){
        return res.status(400).send("invalid request")
    }
    const token = await checkLogin(email, password)
    if (token) {
        return res.send({success: true, token})
    }
    return res.send
}



export async function aboutMe(req, res) {
    const {username, role, assignedArena} = req.user
    res.send({username, role, assignedArena})
}

///////////
export async function allUsers(req, res) {
    if (req.user.role != "admin") {
        return res.status(403).send("You do not have permission.")
    }
    const users = await getAllUsers()
    const withoutPass = []
    users.forEach(u => {
        const user = {
            id: u._id,
            username: u.username,
            email: u.email,
            role: u.role,
            assignedArena: u.assignedArena
        }
        withoutPass.push(user)
    })
    res.send(withoutPass)

}



export async function deleteUser(req, res) {
    if (req.user != "admin") {
        return res.status(403).send("You do not have permission.")
    }
    const {id} = req.params
    const deleted = await deleteUserById(id)
    return deleted
}