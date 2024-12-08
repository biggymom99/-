import SocialButton from "./ui/SocialButton";

return (
  <div className="flex gap-4">
    {/* Kakao 로그인 버튼 */}
    <SocialButton
      onClick={handleKakaoLogin}
      className="bg-[#FEE500] hover:bg-[#FDD800]"
      label="카카오 로그인"
    >
      K
    </SocialButton>

    {/* Google 로그인 버튼 */}
    <SocialButton
      onClick={handleGoogleLogin}
      className="bg-white hover:bg-gray-100"
      label="구글 로그인"
    >
      G
    </SocialButton>

    {/* Facebook 로그인 버튼 */}
    <SocialButton
      onClick={handleFacebookLogin}
      className="bg-[#1877F2] hover:bg-[#166FE5]"
      label="페이스북 로그인"
    >
      F
    </SocialButton>
  </div>
);
