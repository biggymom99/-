import React, { useState } from "react";
import axios from "axios";
import SignUp from "./Signup";

interface SignUpFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      return "모든 필드를 입력해주세요.";
    }
    if (formData.password !== formData.confirmPassword) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://your-api-url.com/auth/signup", {
        username: formData.username,
        password: formData.password,
      });
      setLoading(false);
      setSuccess("회원가입이 성공적으로 완료되었습니다.");
      console.log("회원가입 성공:", response.data);
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "회원가입 중 오류가 발생했습니다.");
      console.error("회원가입 실패:", err);
    }
  };

  return (
    <SignUp/>
  );
};

export default SignUpForm;
