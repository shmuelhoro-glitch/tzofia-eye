import api from "./axiosConfig";
import type { User } from "../types/usersTypes";

export async function createUser(user: User) {
  const response = await api.post("/auth/register", user);
  return response.data;
}

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  if (res.data.success) {
    localStorage.setItem("access_token", res.data.token);
  }
  return res.data;
}

export async function AboutMe() {
  const res = await api.get("/auth/me");
  return res.data;
}

export async function deleteUser(userId: string) {
  const res = await api.delete(`/auth/users/${userId}`);
  return res.data;
}

export async function getAllUsers() {
  const res = await api.get("/auth/users");
  return res.data;
}
