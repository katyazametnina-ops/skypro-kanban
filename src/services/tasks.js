import { request } from "./api";

export const getTasks = (token) => {
  return request("/kanban", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTask = (token, taskData) => {
  return request("/kanban", {
    method: "POST",
    headers: {
      "Content-Type": "",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
};
