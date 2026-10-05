import { z } from "zod"


const Alert = z.object({
    displayName: z.string(),
    description: z.string().min(5),
    priority: z.enum(["Low", "Medium", "High", "Critical"]) ,
    arena: z.enum(["North", "South", "Center"]),
    status: z.enum(["Active", "Handled"]),
    lon: z.number(),
    lat: z.number()
}).strict()


export default Alert