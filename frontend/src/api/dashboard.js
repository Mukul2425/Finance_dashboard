import { apiRequest } from "./client";

export function fetchDashboardSummary(token) {
  return apiRequest("/dashboard/summary/", "GET", null, token);
}
