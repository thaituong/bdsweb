import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "api/api"; // Kiểm tra đúng đường dẫn import
import { toast } from "react-toastify";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Gửi yêu cầu đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      toast.success("Đăng ký thành công!");
      navigate("/admin/login"); // Chuyển hướng đến trang đăng nhập
    } catch (error) {
      toast.error(error.response?.data?.message || "Lỗi khi đăng ký!");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-800">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-900">Đăng ký Admin</h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-800"
          >
            Đăng ký
          </button>
        </form>
        <p className="text-center mt-4">
          Đã có tài khoản? <a href="/admin/login" className="text-blue-500">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
