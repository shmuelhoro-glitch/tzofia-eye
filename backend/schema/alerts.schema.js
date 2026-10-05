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




export const UpdateAlert = z.object({
    displayName: z.string().optional(),
    description: z.string().min(5).optional(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional() ,
    arena: z.enum(["North", "South", "Center"]).optional(),
    status: z.enum(["Active", "Handled"]).optional(),
    lon: z.number().optional(),
    lat: z.number().optional()
}).strict()
