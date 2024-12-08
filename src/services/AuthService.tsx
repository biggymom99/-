import api from "./API";

export interface SignUpData {
  username: string;
  password: string;
  confirmPassword: string;
}

export const signUp = async (data: SignUpData): Promise<any> => {
  try {
    const response = await api.post("/auth/signup", data);
    return response.data; // 성공한 데이터 반환
  } catch (error: any) {
    if (error.response) {
      // 서버 응답 오류 처리
      throw new Error(error.response.data.message || "회원가입에 실패했습니다.");
    } else {
      // 네트워크 오류 또는 기타 오류 처리
      throw new Error("네트워크 오류가 발생했습니다.");
    }
  }
};
