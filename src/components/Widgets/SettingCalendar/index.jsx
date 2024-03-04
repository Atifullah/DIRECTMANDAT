import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Subtitle } from "src/components";

export const SettingCalender = () => {
  const [select, setSelect] = useState([]);
  const weekends = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
  const [day, setDay] = useState(15);
  let days = day - 1;
  let hours = 8;
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex justify-between">
        <svg
          onClick={() => {
            day > 2 && setDay(day - 6);
          }}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_626_111704)">
            <mask
              id="mask0_626_111704"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="35"
              height="35"
            >
              <path
                d="M34.56 0.00195312H0V34.5629H34.56V0.00195312Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_626_111704)">
              <path
                d="M22.1899 10.6721L20.1595 8.6416L11.5195 17.2818L20.1595 25.9221L22.1899 23.8916L15.5947 17.2818L22.1899 10.6721Z"
                fill="#323232"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_626_111704">
              <rect width="34.56" height="34.5609" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Subtitle>
          Semaine du {day - 1} au {day + 5} juin
        </Subtitle>
        <svg
          onClick={() => {
            day < 26 && setDay(day + 6);
          }}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_626_111711)">
            <mask
              id="mask0_626_111711"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="35"
            >
              <path
                d="M35.0014 0.00195312H0.441406V34.5629H35.0014V0.00195312Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_626_111711)">
              <path
                d="M14.8409 8.6416L12.8105 10.6721L19.4057 17.2818L12.8105 23.8916L14.8409 25.9221L23.4809 17.2818L14.8409 8.6416Z"
                fill="#323232"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_626_111711">
              <rect
                width="34.56"
                height="34.5609"
                fill="white"
                transform="translate(0.439453)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="grid grid-cols-8 gap-2">
        {[...Array(104)].map((item, index) => {
          return (
            <div className="w-full">
              {index === 0 ? (
                <div
                  className="w-full bg-[#585858] rounded-lg h-[40px]"
                  key={index}
                ></div>
              ) : index < 8 ? (
                <div
                  className="w-full bg-[#6FBAFF] rounded-lg h-[40px] flex justify-center items-center text-white text-xs lg:text-md font-bold"
                  key={index}
                >
                  {weekends[index - 1]} <br />
                  {days++}
                </div>
              ) : index % 8 === 0 ? (
                <div
                  className="w-full bg-[#6FBAFF] rounded-lg h-[40px] flex justify-center items-center text-white text-xs lg:text-md font-bold"
                  key={index}
                >
                  {hours++}h00
                </div>
              ) : index < 16 ? (
                <div
                  className="w-full bg-[#585858] rounded-lg h-[40px] flex justify-center items-center"
                  key={index}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_2059_31129"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="25"
                    >
                      <path
                        d="M24.125 0.615234H0.125V24.6152H24.125V0.615234Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_2059_31129)">
                      <path
                        d="M19.125 7.02523L17.715 5.61523L12.125 11.2052L6.535 5.61523L5.125 7.02523L10.715 12.6152L5.125 18.2052L6.535 19.6152L12.125 14.0252L17.715 19.6152L19.125 18.2052L13.535 12.6152L19.125 7.02523Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setSelect((previousState) => {
                      return previousState.find((obj) => {
                        return obj === index;
                      })
                        ? previousState.filter((obj) => obj !== index)
                        : [...select, index];
                    });
                  }}
                  className={clsx(
                    "w-full  rounded-lg h-[40px] flex justify-center items-center",
                    select.find((obj) => {
                      return obj === index;
                    })
                      ? "bg-[#ED7A37]"
                      : "bg-[#FFCBA5]"
                  )}
                  key={index}
                >
                  {select.find((obj) => {
                    return obj === index;
                  }) && (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_2059_31129"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="25"
                        height="25"
                      >
                        <path
                          d="M24.125 0.615234H0.125V24.6152H24.125V0.615234Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_2059_31129)">
                        <path
                          d="M19.125 7.02523L17.715 5.61523L12.125 11.2052L6.535 5.61523L5.125 7.02523L10.715 12.6152L5.125 18.2052L6.535 19.6152L12.125 14.0252L17.715 19.6152L19.125 18.2052L13.535 12.6152L19.125 7.02523Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
