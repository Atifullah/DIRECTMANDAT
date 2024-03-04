import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { PrimaryButton, InputBox, LogoCard } from "src/components";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiService } from "src/apiService";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (body) => {
    try {
      const sha384Password = CryptoJS.SHA384(body.password).toString(
        CryptoJS.enc.Base64
      );

      // need password for the
      // const sha384Password = "S5RpeR1G1Yyo/huk5jX51C6alZd3N/S59bWw3f+mZyYqnmyfXfP52HekePvyN3MC";
      // console.log(sha384Password);

      const { data } = await apiService.post(
        `/ses?usr=${body.email}&pwd=${sha384Password} `
      );
      console.log("logindata",data)

      localStorage.setItem("ses", JSON.stringify(data.SES));
      if (data.SES) {
        navigate("/home");
      } else {
        alert("Server Error");
      }
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  const isAuthenticated = !!localStorage.getItem("ses");
  return (
    <>
      {isAuthenticated && <Navigate to="/home" replace />}
      <div className="w-full h-screen mx-auto bg-[#E7EFFF] flex justify-center items-center ">
        <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto h-screen sm:h-[31.25rem] flex flex-col sm:flex-row overflow-hidden bg-white sm:rounded-lg">
          {/* image section start */}
          <div className="w-full sm:w-1/2 h-2/5 sm:h-full overflow-hidden relative forget__image-linear-gradient forget__image-clip-path bg-white"></div>
          {/* image section end */}
          {/* text section start */}
          <div className="w-full sm:w-1/2 px-2 h-3/5 sm:h-full bg-white flex flex-col justify-center items-center relative">
            <LogoCard />
            {/* form section start */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 sm:gap-2 w-11/12 sm:w-4/5 mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mt-3 sm:mt-5">
                Bienvenue
              </h2>
              <div className="flex flex-col gap-4 w-full sm:w-11/12 mx-auto">
                <InputBox
                  name={"email"}
                  register={register}
                  data={{
                    label: "Nom d’utilisateur",
                    type: "email",
                    placeholder: "olivier.roux@directannonces.com",
                  }}
                  icon={<FaUser />}
                />
                <InputBox
                  name={"password"}
                  register={register}
                  data={{
                    label: "Mot de passe",
                    type: "password",
                    placeholder: "Entrer le mot de passe",
                  }}
                  icon={<AiOutlineLock className="text-2xl font-extrabold" />}
                />
                <div className="text-right w-full">
                  <NavLink
                    to={"/forget"}
                    className="text-lg text-[#777] font-semibold underline underline-offset-8 cursor-pointer"
                  >
                    {/* Mot de passe oublié */}
                    {"Mot de passe oublié"}
                  </NavLink>
                </div>
                <div className="w-full flex justify-center items-center mt-5">
                  {/* <NavLink to={"/home"}> */}
                  <PrimaryButton
                    type={"submit"}
                    data={{
                      name: "Se connecter",
                      primary: true,
                    }}
                  />
                  {/* </NavLink> */}
                </div>
              </div>
            </form>
            {/* form section start */}
          </div>
          {/* text section end */}
        </div>
      </div>
    </>
  );
};

export default Login;
