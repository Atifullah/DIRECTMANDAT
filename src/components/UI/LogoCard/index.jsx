import React from "react";

export const LogoCard = ({ tagLine = true }) => {
  return (
    <div className="flex flex-col text-center px-7 py-4 gap-1 border-white sm:border-black border-solid border absolute sm:static top-[-11.25rem] sm:top-0">
      <h3 className="text-white sm:text-black text-xl font-bold">
        DIRECT<span className="text-primary">M</span>ANDAT
      </h3>
      {tagLine && (
        <p className="text-sm font-bold text-white sm:text-black">
          Une application de DirectAnnonces
        </p>
      )}
    </div>
  );
};
