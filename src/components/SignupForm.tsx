import React, { useState, useContext } from "react";
import {signUp, SignUpData} from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SignUp from "./Signup";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await signUp({
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      console.log("회원가입 성공:", response);

      // 서버로부터 반환된 메시지를 성공 상태로 설정
      setSuccessMessage(response.message || "회원가입이 성공적으로 완료되었습니다.");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <SignUp/>
  );
};

export default SignupForm;