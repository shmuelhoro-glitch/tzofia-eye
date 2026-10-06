export interface User {
    id?: string
    username: string
    password: string 
    email: string
    role: "arena-user" | "general-user" | "admin";
    assignedArena: "All" | "Center" | "South" | "North";
}