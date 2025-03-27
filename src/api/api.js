import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/user"; // Thay đổi nếu cần

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Đăng nhập
export const login = async (username, password) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};

// Đăng ký
export const register = async (user) => {
  const response = await api.post("/auth/register", user);
  return response.data;
};

// Lấy thông tin người dùng
export const getUser = async (token) => {
  const response = await api.get("/findOne", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default api;
