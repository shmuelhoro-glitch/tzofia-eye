import { z } from "zod"


const User = z.object({
    username: z.string(),
    password: z.string().min(8),
    email: z.email(),
    role: z.enum(["general_user", "arena_user", "admin"]),
    assignedArena: z.enum(["All", "Center", "South", "North"]),
}).strict()


export default User