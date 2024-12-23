import React from "react";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-white">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
