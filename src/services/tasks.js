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

export const updateTask = (token, id, taskData) => {
  return request(`/kanban/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
};

export const deleteTask = (token, id) => {
  return request(`/kanban/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTaskById = (token, id) => {
  return request(`/kanban/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
