import React, { useState, useContext } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nickname: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await AuthService.signup(formData);
      setAuthData({
        ...response.data,
        isAdmin: response.data.role === 'ADMIN',
      });
      localStorage.setItem("authData", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">회원가입</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">아이디</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nickname" className="block text-gray-700">닉네임</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition">가입하기</button>
      </form>
    </div>
  );
};

export default Join;