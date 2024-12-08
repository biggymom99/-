import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 간단한 입력값 검증
    if (!formData.username || !formData.password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://your-api-url.com/login", formData);
      setLoading(false);
      console.log("로그인 성공:", response.data);
      // 성공 시 처리 (예: 토큰 저장, 리다이렉트 등)
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <Login/>
  );
};

export default LoginForm;
