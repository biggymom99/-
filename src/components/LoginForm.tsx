import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import LoginForm from "./Login";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await axios.post(
        "/api/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    <LoginForm/>
  );
};

export default Login;