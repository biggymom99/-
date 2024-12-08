import axios from "axios";

const AuthService = {
  signup: async (formData: { username: string; password: string; nickname: string; email: string }) => {
    try {
      const response = await axios.post(
        "/api/join",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response;
    } catch (error: any) {
      throw new Error("회원가입 실패: " + error.message);
    }
  },
};

export default AuthService;