"use client"
import React, { useState } from "react";
import Image from "next/image";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const Icon = showPassword ? BiSolidShow : BiSolidHide;

  return (
    <section className="w-full h-screen flex">
<div className="w-1/3 h-full">
        <form className="flex flex-col p-12 gap-2">
          <Image
            src="/logo.png"
            alt="Logo do Clientera"
            width={230}
            height={90}
            className="m-auto"
          />

          <h2 className="text-left font-semibold text-lg mt-4">Bem-vindo de volta!</h2>

          <div>
            <label className="text-black text-xs pl-1">E-mail</label>
            <div className="w-full h-9 bg-[#F2F2F2] mt-1 rounded-md p-1">
              <input
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                type="text"
                placeholder="Digite seu e-mail"
                className="p-2 bg-transparent w-full h-full outline-none text-xs text-black font-semibold placeholder:text-xs placeholder:text-text-secondary"
              />
            </div>
          </div>

          <div>
            <label className="text-black text-xs pl-1">Senha</label>
            <div className="w-full h-9 bg-[#F2F2F2] mt-1 rounded-md p-1 flex items-center">
              <input
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className="p-2 mr-2 bg-transparent w-11/12 h-full outline-none text-xs text-black font-semibold placeholder:text-xs placeholder:text-text-secondary"
              />
              <Icon
                className="w-1/12 text-gray-700 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />

            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="flex gap-1 items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="group peer ring-0 bg-[#F2F2F2] rounded-full outline-none duration-300 after:duration-300 w-9 h-[17px] shadow-md peer-checked:bg-[#007AFF] peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-400 peer-checked:after:bg-gray-50 after:outline-none after:h-[14px] after:w-[15px] after:top-[1.5px] after:left-[1.5px] after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-[18px] peer-hover:after:scale-95 peer-checked:after:rotate-0">
                </div>
              </label>
              <span className="text-xs text-gray-700">Lembrar de mim</span>
            </div>





            <a href="#" className="text-xs text-[#007AFF] hover:underline">
              Esqueceu sua senha?
            </a>
          </div>


          <div className="flex justify-center w-full h-10 bg-[#007AFF] rounded-md mt-2 cursor-pointer hover:opacity-90"><span className="m-auto text-white text-sm font-semibold">Entrar</span></div>
          <div className="h-[1px] w-full bg-gray-300 mt-4"></div>
          <div className="flex items-center justify-center w-full h-10 bg-[#333333] rounded-md mt-2 cursor-pointer hover:opacity-90 space-x-2">
            <Image
              src="/google-logo.png"
              alt="Logo da Google"
              width={20}
              height={20}
            />
            <span className="text-white text-sm font-medium">
              Ou entre com o Google
            </span>
          </div>

          <div className="flex justify-center gap-2 text-xs mt-3">
            <span className="text-black">Ainda não tem conta?</span>
            <span className="text-[#007AFF] font-semibold cursor-pointer hover:underline">Cadastre-se agora</span>
          </div>

          <span className="fixed bottom-2 left-4 text-text-secondary text-xs">© Clientera 2025</span>


        </form>
      </div>

      <div className="relative w-1/3 h-full">
        <Image
          src="/login-signup-man-laugh.png"
          alt="Homem sorrindo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative w-1/3 h-full">
        <Image
          src="/login-signup-woman-laugh.png"
          alt="Mulher sorrindo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>


      
    </section>
  );
}
