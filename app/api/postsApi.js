// src/api/postsApi.js
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const postsApi = {
  fetchAll: () => axios.get(API_URL),
  fetchById: (id) => axios.get(`${API_URL}/${id}`),
  create: (data) => axios.post(API_URL, data),
  update: (id, data) => axios.put(`${API_URL}/${id}`, data),
  remove: (id) => axios.delete(`${API_URL}/${id}`),
};
