import { request } from "./api";

export const getTasks = (token) => {
  return request("/kanban", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
