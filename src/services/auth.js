import { request } from "./api";

export const signUp = (userData) => {
  return request("/user", {
    method: "POST",
    headers: {
      "Content-Type": "",
    },
    body: JSON.stringify(userData),
  });
};

export const signIn = (userData) => {
  return request("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "",
    },
    body: JSON.stringify(userData),
  });
};
