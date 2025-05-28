import React from "react";
import kidneyImage from "../image.png";
import { MenuButtons } from "./MenuButtons";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/loggin");
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] flex flex-col items-center justify-center text-center px-4">
      <h1
        className="text-[80px] mb-8"
        style={{ fontFamily: "'Inria Serif', serif", color: "black" }}
      >
        NefroSalut
      </h1>

      <img
        src={kidneyImage}
        alt="Kidney Puzzle"
        className="w-[300px] h-auto mb-12 shadow rounded"
      />

      {/* Contenedor de botones con separación vertical */}
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <div className="w-full">
          <MenuButtons label="Comença" onClick={handleStart} />
        </div>
        <div className="w-full">
          <MenuButtons label="Registrat" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};
