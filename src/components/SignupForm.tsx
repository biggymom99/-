import Input from "../components/ui/Input"
import Separator from "../components/ui/Separator"
import SignupButton from "./ui/SignupButton"
import SocialButton from "./ui/SocialButton"
import {
  handleKakaoLogin,
  handleGoogleLogin,
  handleFacebookLogin,
} from "../services/socialLoginHandlers";



export default function SignUpForm() {
  return (
    <div className="min-h-screen flex flex-col bg-[#3B75B5]">
      <nav className="bg-[#2E4D6C] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">멍는거냥</h1>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-200 rounded-[20px]">
              홈
            </button>
            <button className="text-white hover:text-gray-200 rounded-[20px]">
              로그인
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#F5F5F5] shadow-lg border-[1.5px] border-black rounded-[20px] p-6">
          <h2 className="text-center text-lg font-medium mb-6">회원가입</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">아이디</label>
              <Input
                id="username"
                type="text"
                placeholder="아이디를 입력하세요"
                className="bg-white border-[1.5px] border-black rounded-[20px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">비밀번호</label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="bg-white border-[1.5px] border-black rounded-[20px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">비밀번호 확인</label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력하세요"
                className="bg-white border-[1.5px] border-black rounded-[20px]"
              />
            </div>

            <SignupButton
              type="submit"
              className="w-full bg-[#E4C89C] hover:bg-[#D4B88C] text-black border-[1.5px] border-black rounded-[20px]"
            >
              회원가입
            </SignupButton>

            <div className="relative flex items-center justify-center">
              <Separator className="absolute w-full border-t-[1.5px] border-black" />
              <span className="relative px-2 text-sm bg-[#F5F5F5] text-gray-500">또는 SNS 연동 로그인</span>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <SocialButton
                onClick={handleKakaoLogin} // Kakao 로그인 핸들러 연결
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-black hover:bg-gray-800"
                label="카카오 로그인"
              >
                <img src="/ic_kakaotalk.png" alt="" width={20} height={20} />
              </SocialButton>

              {/* Google 로그인 버튼 */}
              <SocialButton
                onClick={handleGoogleLogin} // Google 로그인 핸들러 연결
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-black hover:bg-gray-800"
                label="구글 로그인"
              >
                <img src="/ic_google.png" alt="" width={20} height={20} />
              </SocialButton>

              {/* Facebook 로그인 버튼 */}
              <SocialButton
                onClick={handleFacebookLogin} // Facebook 로그인 핸들러 연결
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-black hover:bg-gray-800"
                label="페이스북 로그인"
              >
                <img src="/ic_facebook.png" alt="" width={20} height={20} />
              </SocialButton>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-[#2E4D6C] text-white">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <p className="text-sm">© 2024 멍는거냥. All rights reserved</p>
          <div className="text-sm">
            <a href="#" className="hover:underline mr-4">이용약관</a>
            <a href="#" className="hover:underline">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

