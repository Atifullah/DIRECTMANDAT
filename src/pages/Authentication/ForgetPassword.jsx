import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { PrimaryButton, InputBox, LogoCard } from "src/components";
import { useForm } from "react-hook-form";
import { apiService } from "src/apiService";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (body) => {
    try {
      const { data } = await apiService.put(`/pwd?eml=${body.email}`);
      if (data.status === "OK") {
        navigate("/");
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
      <div className="bg-gray">
        <div className="w-full  mx-auto h-screen flex justify-center items-center ">
          <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto h-screen sm:h-[31.25rem] flex flex-col sm:flex-row overflow-hidden bg-white sm:rounded-lg">
            {/* image section start */}
            <div className="w-full sm:w-1/2 h-2/5 sm:h-full overflow-hidden relative forget__image-linear-gradient forget__image-clip-path bg-white"></div>
            {/* image section end */}
            {/* text section start */}
            <div className="w-full sm:w-1/2 px-2 h-3/5 sm:h-full bg-white flex flex-col justify-evenly items-center relative">
              <LogoCard />

              {/* form section start */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 sm:gap-2 w-11/12 sm:w-4/5 mx-auto"
              >
                <h2 className="text-3xl font-bold text-center mt-3 sm:mt-5">
                  Mot de passe oublié
                </h2>
                <div className="flex flex-col gap-4 w-full sm:w-11/12 mx-auto">
                  <InputBox
                    register={register}
                    name={"email"}
                    data={{
                      label: "Email",
                      type: "email",
                      placeholder: "olivier.roux@directannonces.com",
                    }}
                  />

                  <div className="w-full flex justify-center items-center mt-5">
                    <PrimaryButton
                      type={"submit"}
                      data={{
                        name: "Recevoir mon nouveau mot de passe",
                        size: "lg",
                        primary: true,
                      }}
                    />
                  </div>
                </div>
              </form>
              {/* form section start */}
              {/* login page link section start */}
              <div className="w-full flex justify-center items-center">
                <NavLink
                  to="/"
                  className="text-[#898989] text-lg font-semibold underline underline-offset-8 cursor-pointer"
                >
                  Se connecter
                </NavLink>
              </div>
              {/* login page link section end */}
            </div>
            {/* text section end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
