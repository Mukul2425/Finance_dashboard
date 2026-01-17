import { apiRequest } from "./client";

export function loginUser(username, password) {
  return apiRequest("/auth/login/", "POST", {
    username,
    password,
  });
}
