import React from "react";
import { NavLink } from "react-router-dom";
import { Footer, Navbar } from "src/components";

export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between relative pb-36">
      <Navbar />
      <div className="w-[95%] lg:w-[90%] mx-auto flex flex-col text-center pt-24">
        {children}
      </div>
      <NavLink to={"/contact-page"}>
        <button className="fixed right-6 bottom-6 bg-secondary rounded-full px-2 py-4 flex gap-2 text-white z-[2]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1495_66437"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <path d="M24.5 0H0.5V24H24.5V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1495_66437)">
              <path
                d="M11.5 18H13.5V16H11.5V18ZM12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 6C10.29 6 8.5 7.79 8.5 10H10.5C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 12 11.5 11.75 11.5 15H13.5C13.5 12.75 16.5 12.5 16.5 10C16.5 7.79 14.71 6 12.5 6Z"
                fill="white"
              />
            </g>
          </svg>
          Nous contacter
        </button>
      </NavLink>
      <Footer />
    </div>
  );
};
