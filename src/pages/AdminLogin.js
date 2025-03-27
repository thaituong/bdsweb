import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "api/api";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("adminToken", data.token);
      toast.success("Đăng nhập thành công!");
      navigate("/admin"); // Chuyển hướng đến trang admin
    } catch (error) {
      toast.error("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-800">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 mb-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
