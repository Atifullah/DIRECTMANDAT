import React from "react";
import { Paragraph, Subtitle } from "../Typography";
import clsx from "clsx";

export const InputBox = (props) => {
  return (
    <>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="email" className="text-[18px] font-bold">
          {props.data.label}
        </label>
        <div className="flex gap-1 items-center w-full border-b-primary border-solid border  border-t-transparent border-x-transparent py-1">
          <span className="w-1/12 flex justify-center items-center text-2xl">
            {props.icon ? props.icon : "@"}
          </span>
          <input
            {...props.register(props?.name)}
            type={props?.data.type}
            placeholder={props?.data.placeholder}
            className="text-[#777] text-base sm:text-lg font-semibold bg-transparent outline-none border-none w-11/12"
          />
        </div>
      </div>
    </>
  );
};

export const RadioInput = ({ label }) => {
  return (
    <label htmlFor={label} className="flex gap-2">
      <input type="radio" id={label} />
      <Subtitle>{label}</Subtitle>
    </label>
  );
};

export const CheckInput = ({ label, ...props }) => {
  return (
    <label {...props} for={label} className=" container ">
      <Subtitle>{label}</Subtitle>
      <input type="checkbox" id={label} />
      <span class="checkmark"></span>
    </label>
  );
};

export const InputField = ({ name, ...props }) => {
  return (
    <label htmlFor={name} className="w-full">
      <Paragraph
        className={"!whitespace-nowrap text-start !text-black font-bold"}
      >
        {name}
      </Paragraph>
      <input
        {...props}
        id={name}
        className="border bg-transparent w-full border-transparent border-b-primary outline-none "
      />
    </label>
  );
};
export const SecondaryInputField = ({ className, icon, name, ...props }) => {
  return (
    <label htmlFor={name} className="text-start w-full">
      <Paragraph className={"!font-bold !text-black"}>{name}</Paragraph>
      <div
        className={clsx(
          "flex  justify-between border border-transparent border-b-primary",
          className
        )}
      >
        <input
          {...props}
          id={name}
          className="border border-transparent  bg-transparent w-full outline-none"
        />
        <div className="font-bold text-xl">{icon}</div>
      </div>
    </label>
  );
};
