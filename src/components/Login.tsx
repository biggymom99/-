import React from "react";
import NavButton from "./ui/NavButton";
import LoginButton from "./ui/LoginButton";
import SignupButton from "./ui/SignupButton";
import Input from "./ui/Input"; 

import Separator from "./ui/Separator";



export default function LoginForm() {
  return (
    <div className="min-h-screen flex flex-col bg-[#3B75B5]">
      <nav className="bg-[#2E4D6C] p-4 rounded-b-none">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">멍는거냥</h1>
          <div className="flex items-center space-x-4">
            <NavButton className="text-white">홈</NavButton>
            <NavButton className="text-white">로그인</NavButton>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#FFFFFF] shadow-lg border-[1.5px] border-black rounded-[20px] p-6">
          <h2 className="text-center text-lg font-medium mb-6">로그인</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium">
                아이디
              </label>
              <Input id="username" type="text" placeholder="아이디를 입력하세요" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                비밀번호
              </label>
              <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>

            <LoginButton type="submit">로그인</LoginButton>

            <div className="relative flex items-center justify-center">
              <Separator className="absolute w-full border-t-[1.5px] border-black" />
              <span className="relative px-2 text-sm bg-white text-gray-500">
                SNS 연동 로그인
              </span>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border-[1.5px] border-black hover:bg-gray-800"
                aria-label="카카오 로그인"
              >
                <img src="/ic_kakaotalk.png" alt="" width={20} height={20} />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border-[1.5px] border-black hover:bg-gray-800"
                aria-label="구글 로그인"
              >
                <img src="/ic_google.png" alt="" width={20} height={20} />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center border-[1.5px] border-black hover:bg-gray-800"
                aria-label="페이스북 로그인"
              >
                <img src="/ic_facebook.png" alt="" width={20} height={20} />
              </button>
            </div>
            <div className="text-center mt-4">
              <SignupButton>회원가입</SignupButton>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-[#2E4D6C] text-white rounded-t-none">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <p className="text-sm">© 2024 멍는거냥. All rights reserved</p>
          <div className="text-sm">
            <a href="#" className="hover:underline mr-4">
              이용약관
            </a>
            <a href="#" className="hover:underline">
              개인정보처리방침
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
