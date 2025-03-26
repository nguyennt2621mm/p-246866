import React from "react";
import LoginForm from "./LoginForm";
import { CopyrightIcon } from "@/components/icons";

export const LoginPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/8cb73ca984d2473aaf9e1ea11a71e26b29bb1e28')] bg-cover bg-center flex justify-center items-center">
      {/* Overlay */}
      <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />

      {/* Content Container */}
      <div className="relative z-[1] flex flex-col items-center w-full max-w-[1200px] p-5">
        {/* Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b563cff852df8bb6e1164a7c29efde9ed8c92b"
          alt="Seaventures Logo"
          className="w-[433px] h-[154px] mb-10 max-md:w-[350px] max-md:h-auto max-sm:w-[250px]"
        />

        {/* Login Form */}
        <LoginForm />

        {/* Footer */}
        <footer className="flex items-center gap-2.5 mt-10">
          <CopyrightIcon />
          <div className="text-white text-xl max-sm:text-base">
            2018-2023 PT. Seaventures Indonesia. All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
