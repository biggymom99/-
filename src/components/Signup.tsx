import React, { useState, useContext } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SignUpForm from "./SignupForm";

const Signup: React.FC = () => {
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
    <SignUpForm/>
  );
};

export default Signup;