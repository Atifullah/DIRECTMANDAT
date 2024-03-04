import React from "react";
import { useState } from "react";
import {
  CustomCalender,
  EyeIcon,
  HeadSubtitle,
  HeadTitle,
  Paragraph,
  SelectedIcon,
  TelephoneIcon,
  Tiny,
} from "src/components";
import { Layout } from "src/layout";

const MyReminders = () => {
  const [selectedReminders, setSelectedReminders] = useState([
    {
      data: 1,
      isSelected: false,
    },
    {
      data: 2,
      isSelected: false,
    },
    {
      data: 3,
      isSelected: false,
    },
    {
      data: 4,
      isSelected: false,
    },
  ]);
  return (
    <Layout>
      <HeadTitle className={"text-start"}>Liste des rappels</HeadTitle>
      <div className="flex flex-col w-full lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[50%] flex justify-center">
          <CustomCalender />
        </div>
        <div className="shadow-xl h-[60vh] w-full lg:w-[40%]  bg-[#F6F6F6] rounded-xl p-4 flex flex-col gap-6 items-start">
          <div className="flex gap-3 items-center w-full">
            <HeadTitle className={"!text-primary"}>
              <div>16</div>
              <div className="!text-xs">VEN.</div>
            </HeadTitle>
            <div className="flex flex-col items-start w-full">
              <HeadSubtitle>Mes rappels</HeadSubtitle>
              <Paragraph>3 rappels</Paragraph>
            </div>
          </div>
          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {selectedReminders.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-3 w-full">
                  <div
                    onClick={() =>
                      setSelectedReminders((prevState) =>
                        prevState.map((e) =>
                          e.data === item.data
                            ? { ...item, isSelected: !item.isSelected }
                            : e
                        )
                      )
                    }
                  >
                    {!item.isSelected ? (
                      <SelectedIcon />
                    ) : (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 34 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1"
                          y="1.00977"
                          width="32"
                          height="32"
                          rx="7"
                          stroke="#B3B3B3"
                          stroke-width="2"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex justify-between bg-[#F0F0F0] w-full self-end text-start rounded-lg p-2">
                    <div className="flex flex-col gap-2 justify-start">
                      <Paragraph className={"!font-bold"}>
                        Rappeler 06 07 11 12 13
                      </Paragraph>
                      <Tiny>Petite maison à Bordeaux, client pas décroché</Tiny>
                    </div>
                    <div className="flex flex-col justify-around gap-1">
                      <div className="w-[30px] h-[30px] p-2 rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                        <TelephoneIcon color={"white"} />
                      </div>
                      <div className="w-[30px] h-[30px] p-2 rounded-full bg-primary text-2xl text-white font-bold flex items-center justify-center">
                        <EyeIcon color={"white"} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyReminders;
