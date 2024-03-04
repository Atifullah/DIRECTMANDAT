import clsx from "clsx";
import React from "react";

export const Divider = ({ className }) => {
  return <div className={clsx("w-full h-px bg-black", className)}></div>;
};
