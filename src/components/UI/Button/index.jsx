import clsx from "clsx";
import React from "react";

export const PrimaryButton = (props) => {
  const buttonColor = props.data.primary
    ? "bg-primary"
    : props.data.secondary
    ? "bg-secondary"
    : `bg-[#A0A0A0]`;
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={clsx(
        "whitespace-nowrap flex justify-center items-center rounded-full text-white text-[11px] lg:text-[16px]  font-semibold py-2 px-2 lg:px-3 ",
        buttonColor,
        props.className
      )}
    >
      {props.data.name}
    </button>
  );
};

export const SecondaryButton = (props) => {
  const buttonColor = props.data.primary
    ? "border-primary"
    : props.data.secondary
    ? "border-secondary"
    : `bg-[${props.data.color}]`;
  const buttonSize = props.data.size === "lg" ? "w-full" : "w-auto";
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "rounded-full flex justify-center items-center text-primary text-sm lg:text-md font-semibold py-1 lg:py-2 px-4 lg:px-3 border ",
        buttonColor,
        buttonSize,
        props.className
      )}
    >
      {props.data.name}
    </button>
  );
};
