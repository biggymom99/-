import { Kakao } from "@kakao/sdk";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

// Kakao 로그인 핸들러
export const handleKakaoLogin = async (): Promise<any> => {
  try {
    await Kakao.init("YOUR_KAKAO_REST_API_KEY");
    const response = await Kakao.Auth.login();
    console.log("카카오 로그인 성공:", response);
    return response;
  } catch (error) {
    console.error("카카오 로그인 실패:", error);
    throw error;
  }
};

// Google 로그인 핸들러
export const handleGoogleLogin = async (): Promise<any> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log("구글 로그인 성공:", result);
    return result;
  } catch (error) {
    console.error("구글 로그인 실패:", error);
    throw error;
  }
};

// Facebook 로그인 핸들러
export const handleFacebookLogin = async (): Promise<any> => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log("페이스북 로그인 성공:", result);
    return result;
  } catch (error) {
    console.error("페이스북 로그인 실패:", error);
    throw error;
  }
};
