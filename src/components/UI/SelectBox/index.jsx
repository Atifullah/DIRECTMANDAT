import React from "react";
import { GrAidOption } from "react-icons/gr";
import { Paragraph } from "../Typography";
export const SelectBox = (props) => {
  return (
    <div className="w-full">
      <Paragraph className="!text-black text-start !font-bold">
        {props.name}{" "}
      </Paragraph>
      <div className="w-full relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <GrAidOption />
        </div>
        <select className="w-full bg-transparent border-transparent border-b border-b-primary py-1 pl-7 text-md font-semibold text-[#777] ">
          {props.option?.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                className="text-[#777] font-semibold "
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export const SecondarySelectBox = ({ name, option }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg text-start font-bold">{name} </p>
      <select className="w-full bg-transparent border-transparent border-b-primary outline-none rounded-md border border-slate-500 px-1 py-2 text-lg font-bold text-black ">
        {option?.map((item) => {
          return (
            <option value={item} className="text-black font-bold">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const ThirderySelectBox = ({
  name,
  option,
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg text-start font-bold">{name} </p>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="w-full bg-transparent outline-none rounded-md border border-slate-500 px-1 py-2 text-lg font-bold text-black "
      >
        {option?.map((item, index) => {
          return (
            <option key={index} value={item} className="text-black font-bold">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
