import React, { useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { MdBusiness } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import PropTypes from 'prop-types';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddArticleForm = ({ onCancel }) => {
  const [title, setTitle] = useState("");
  const [createdDate, setCreatedDate] = useState(new Date().toISOString().split("T")[0]);
  const [author, setAuthor] = useState("Admin");
  const [articleCode, setArticleCode] = useState("");
  const [status, setStatus] = useState("Hoạt động");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newArticle = {
      title,
      createdDate,
      author,
      articleCode,
      status,
      content,
      image,
    };
    console.log("Bài viết mới:", newArticle);
    alert("Bài viết đã được lưu!");
  };

  return (
    <div className="p-6 bg-white rounded shadow-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Thêm bài viết mới</h1>

      {/* Tên bài viết */}
      <input
        type="text"
        placeholder="Tên bài viết..."
        className="border px-4 py-2 rounded w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Tên bài viết"
      />

      {/* Ngày tạo */}
      <input
        type="date"
        className="border px-4 py-2 rounded w-full mb-4"
        value={createdDate}
        onChange={(e) => setCreatedDate(e.target.value)}
        aria-label="Ngày tạo"
      />

      {/* Người tạo */}
      <input
        type="text"
        className="border px-4 py-2 rounded w-full mb-4 bg-gray-100"
        value={author}
        readOnly
        aria-label="Người tạo"
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Mã bài viết */}
      <input
        type="text"
        placeholder="Mã bài viết..."
        className="border px-4 py-2 rounded w-full mb-4"
        value={articleCode}
        onChange={(e) => setArticleCode(e.target.value)}
        aria-label="Mã bài viết"
      />

      {/* Trạng thái */}
      <select
        className="border px-4 py-2 rounded w-full mb-4"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Trạng thái"
      >
        <option value="Hoạt động">Hoạt động</option>
        <option value="Tạm dừng">Tạm dừng</option>
      </select>

      {/* Ảnh đại diện */}
      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={handleImageChange}
        aria-label="Ảnh đại diện"
      />
      {image && (
        <div className="mb-4">
          <img src={image} alt="Ảnh đại diện" className="w-32 h-32 object-cover rounded shadow" />
        </div>
      )}

      {/* Nội dung bài viết */}
      <ReactQuill value={content} onChange={setContent} className="mb-4" aria-label="Nội dung bài viết" />

      {/* Nút lưu & hủy */}
      <div className="flex space-x-4 mt-4">
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleSubmit}
        >
          Lưu
        </button>
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={onCancel}
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

// ✅ Thêm propTypes
AddArticleForm.propTypes = {
  onCancel: PropTypes.func.isRequired, // Đảm bảo `onCancel` là một function và bắt buộc phải truyền vào
};

const AdminLayout = () => {
  const isAuthenticated = localStorage.getItem("adminToken");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Dịch vụ");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingArticle, setIsAddingArticle] = useState(false); // Thêm state này

  const itemsPerPage = 2;

  const articlesData = useMemo(
    () => ({
      "Dịch vụ": [
        { id: 1, code: "DV001", title: "Dịch vụ A", category: "Dịch vụ", status: "Hoạt động" },
        { id: 2, code: "DV002", title: "Dịch vụ B", category: "Dịch vụ", status: "Tạm dừng" },
        { id: 3, code: "DV003", title: "Dịch vụ C", category: "Dịch vụ", status: "Hoạt động" },
      ],
      "Sản phẩm": [
        { id: 4, code: "SP001", title: "Sản phẩm X", category: "Sản phẩm", status: "Hoạt động" },
        { id: 5, code: "SP002", title: "Sản phẩm Y", category: "Sản phẩm", status: "Hết hàng" },
        { id: 6, code: "SP003", title: "Sản phẩm Z", category: "Sản phẩm", status: "Hoạt động" },
      ],
    }),
  );

  const articles = articlesData[activeCategory] || [];
  const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-white border-r p-4 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}>
        <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-4">
          <span style={{ fontSize: "130%", fontWeight: "bold" }}>☰</span>
        </button>
        <nav className="flex flex-col items-center gap-2">
          {[
            { name: "Dịch vụ", icon: <MdBusiness className="text-2xl" /> },
            { name: "Sản phẩm", icon: <FaHome className="text-2xl" /> },
          ].map((item) => (
            <div
              key={item.name}
              role="button"
              tabIndex={0}
              onClick={() => {
                setActiveCategory(item.name);
                setCurrentPage(1);
                setIsAddingArticle(false); // Quay lại danh sách khi chuyển tab
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(item.name);
                  setCurrentPage(1);
                  setIsAddingArticle(false);
                }
              }}
              className={`flex items-center ${
                isSidebarOpen ? "justify-start" : "justify-center"
              } w-full p-2 cursor-pointer rounded-lg transition-all duration-200 hover:bg-gray-200 text-gray-700 ${
                activeCategory === item.name ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              <div className="w-10 flex justify-center items-center">{item.icon}</div>
              {isSidebarOpen && <span className="text-sm mt-1">{item.name}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <span className="text-xl font-bold">{activeCategory}</span>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer">🔔</span>
            <span className="cursor-pointer">❓</span>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isAddingArticle ? (
            <AddArticleForm onCancel={() => setIsAddingArticle(false)} />
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="border px-4 py-2 rounded w-1/3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setIsAddingArticle(true)}
                >
                  + Thêm mới
                </button>
              </div>

              {/* Danh sách bài viết */}
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2 text-center w-12">STT</th>
                    <th className="border border-gray-300 p-2">Mã bài viết</th>
                    <th className="border border-gray-300 p-2">Tên bài viết</th>
                    <th className="border border-gray-300 p-2">Chủ đề</th>
                    <th className="border border-gray-300 p-2">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedArticles.length > 0 ? (
                    paginatedArticles.map((article, index) => (
                      <tr key={article.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-2 text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td className="border border-gray-300 p-2">{article.code}</td>
                        <td className="border border-gray-300 p-2">{article.title}</td>
                        <td className="border border-gray-300 p-2">{article.category}</td>
                        <td className="border border-gray-300 p-2">{article.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="border border-gray-300 p-4 text-center">Không tìm thấy bài viết nào.</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex justify-center mt-4 space-x-2">
                <button
                  type="button"
                  className={`px-3 py-1 border rounded ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  ← Trước
                </button>
                <span className="px-3 py-1 border">{currentPage} / {totalPages}</span>
                <button
                  type="button"
                  className={`px-3 py-1 border rounded ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                  }`}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Sau →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
