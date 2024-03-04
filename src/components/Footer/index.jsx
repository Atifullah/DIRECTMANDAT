import React from "react";
import { Subtitle } from "..";

export const Footer = () => {
  const links = [
    {
      label: "Mentions légales",
      url: "/",
    },
    {
      label: "Politique de confidentialité",
      url: "/",
    },
    {
      label: "Politique de confidentialité",
      url: "/",
    },
  ];
  return (
    <div className="mt-auto absolute bottom-0 bg-[#e7efff] w-full flex flex-col justify-center gap-4 items-center py-5">
      <div className="flex justify-center text-center gap-1 lg:gap-10">
        {links.map((item, index) => {
          return <Subtitle key={index}>{item.label}</Subtitle>;
        })}
      </div>
      <div className="flex justify-center">DirectMandat © 2023</div>
    </div>
  );
};
