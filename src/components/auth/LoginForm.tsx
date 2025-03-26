import React, { useState } from "react";
import {
  FacebookIcon,
  GoogleIcon,
  UserIcon,
  PasswordIcon,
} from "@/components/icons";
import SocialLoginButton from "./SocialLoginButton";
import Divider from "./Divider";
import InputField from "./InputField";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic
  };

  const handleSignUp = () => {
    console.log("Navigate to sign up");
    // Handle sign up navigation
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password");
    // Handle forgot password navigation
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[423px] flex flex-col items-center bg-white p-[30px] rounded-[30px] max-md:w-[90%] max-md:max-w-[423px]"
    >
      <h1 className="text-[#0E1041] text-3xl font-bold mb-3">Sign In</h1>

      <div className="text-[#8E8383] text-[15px] mb-[35px]">
        <span>Don't have an account yet? </span>
        <button
          type="button"
          onClick={handleSignUp}
          className="text-[#2C89DF] cursor-pointer bg-transparent border-none p-0"
        >
          Sign up now
        </button>
      </div>

      <div className="flex gap-[22px] mb-[35px] max-sm:flex-col max-sm:gap-[15px] max-sm:w-full">
        <SocialLoginButton
          icon={<FacebookIcon />}
          label="Facebook"
          variant="primary"
          onClick={() => handleSocialLogin("facebook")}
          className="w-[170px] max-sm:w-full max-sm:justify-center"
        />
        <SocialLoginButton
          icon={<GoogleIcon />}
          label="Google"
          onClick={() => handleSocialLogin("google")}
          className="w-[178px] max-sm:w-full max-sm:justify-center"
        />
      </div>

      <Divider className="mb-[35px]" />

      <div className="w-full flex flex-col gap-5 mb-[35px]">
        <InputField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<UserIcon />}
          helperText="ex.myname@seaventures.com"
          required
        />

        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<PasswordIcon />}
          helperText="Forgot your password?"
          onClick={handleForgotPassword}
          required
        />
      </div>

      <button
        type="submit"
        className="w-[350px] h-[51px] text-white text-[25px] font-bold cursor-pointer bg-[#FAC233] rounded-[50px] border-[none] max-sm:w-full"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
