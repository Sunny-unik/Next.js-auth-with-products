import axios from "axios";

const api = axios.create({ baseURL: "https://dummyjson.com" });

export const getProducts = () => api.get("/products");
export const getCarts = () => api.get("/carts");
export const getRecipes = () => api.get("/recipes");
export const searchRecipes = (query) => api.get(`/recipes/search?q=${query}`);
export const getUsers = () => api.get("/users");
export const getPosts = () => api.get("/posts");
export const getComment = (postId) => api.get(`/comments/${postId}`);
export const login = (credentials) => api.post("/auth/login", credentials);
export const refresh = () =>
  api.post("/auth/refresh", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const getUser = () =>
  api.get("/auth/me", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
