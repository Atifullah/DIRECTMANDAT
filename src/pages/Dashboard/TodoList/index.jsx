import React from "react";
import { useState } from "react";
import {
  CustomCalender,
  EyeIcon,
  HeadSubtitle,
  HeadTitle,
  Paragraph,
  PrimaryButton,
  SelectedIcon,
  TelephoneIcon,
  Tiny,
} from "src/components";
import { Layout } from "src/layout";

const TodoList = () => {
  const [upcomingReminders, setUpcomingReminders] = useState([
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
  const [myTask, setMyTask] = useState([
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
      <HeadTitle className={"text-start"}>Liste des rendez-vous</HeadTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full my-5">
        <div className="flex justify-center">
          <div className="w-full lg:w-[50%]">
            <CustomCalender />
          </div>
        </div>
        <div className="lg:shadow-xl order-2 h-[40vh] w-full bg-[#F6F6F6] lg:rounded-xl p-2 lg:p-4 flex flex-col gap-6 items-start">
          <div className="flex flex-col items-start w-full">
            <div className={"flex gap-2"}>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_626_106938"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="37"
                  height="37"
                >
                  <rect
                    x="0.191406"
                    y="0.190918"
                    width="36"
                    height="36"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_626_106938)">
                  <path
                    d="M6.19141 28.6909V25.6909H9.19141V15.1909C9.19141 13.1159 9.81641 11.2722 11.0664 9.65967C12.3164 8.04717 13.9414 6.99092 15.9414 6.49092V5.44092C15.9414 4.81592 16.1602 4.28467 16.5977 3.84717C17.0352 3.40967 17.5664 3.19092 18.1914 3.19092C18.8164 3.19092 19.3477 3.40967 19.7852 3.84717C20.2227 4.28467 20.4414 4.81592 20.4414 5.44092V6.49092C22.4414 6.99092 24.0664 8.04717 25.3164 9.65967C26.5664 11.2722 27.1914 13.1159 27.1914 15.1909V25.6909H30.1914V28.6909H6.19141ZM18.1914 33.1909C17.3664 33.1909 16.6602 32.8972 16.0727 32.3097C15.4852 31.7222 15.1914 31.0159 15.1914 30.1909H21.1914C21.1914 31.0159 20.8977 31.7222 20.3102 32.3097C19.7227 32.8972 19.0164 33.1909 18.1914 33.1909ZM12.1914 25.6909H24.1914V15.1909C24.1914 13.5409 23.6039 12.1284 22.4289 10.9534C21.2539 9.77842 19.8414 9.19092 18.1914 9.19092C16.5414 9.19092 15.1289 9.77842 13.9539 10.9534C12.7789 12.1284 12.1914 13.5409 12.1914 15.1909V25.6909Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <div className="flex flex-col items-start">
                <HeadSubtitle>Mes rappels</HeadSubtitle>
                <Paragraph>Rappels à venir :</Paragraph>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {upcomingReminders.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-3 w-full">
                  <div
                    onClick={() =>
                      setUpcomingReminders((prevState) =>
                        prevState.map((e) =>
                          e.data === item.data
                            ? { ...item, isSelected: !item.isSelected }
                            : e
                        )
                      )
                    }
                  >
                    {item.isSelected ? (
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
          <div className="flex justify-center w-full">
            <PrimaryButton
              data={{
                name: (
                  <div className="flex items-center justify-center">
                    Voir tous les rappels
                  </div>
                ),
                primary: true,
              }}
            />
          </div>
        </div>
        <div className="self-end  lg:shadow-xl h-[30vh] order-4 lg:order-3 w-full bg-[#F6F6F6] lg:rounded-xl p-2 lg:p-4 flex flex-col gap-6 items-start">
          <div className="flex flex-col items-start w-full">
            <div className={"flex gap-2"}>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1914 31.6909V29.0284L26.2914 20.9284L28.9539 23.5909L20.8539 31.6909H18.1914ZM4.69141 23.8159V21.5659H15.9414V23.8159H4.69141ZM30.5664 21.9784L27.9039 19.3159L28.9914 18.2284C29.1914 18.0284 29.4539 17.9284 29.7789 17.9284C30.1039 17.9284 30.3664 18.0284 30.5664 18.2284L31.6539 19.3159C31.8539 19.5159 31.9539 19.7784 31.9539 20.1034C31.9539 20.4284 31.8539 20.6909 31.6539 20.8909L30.5664 21.9784ZM4.69141 17.6284V15.3784H22.3164V17.6284H4.69141ZM4.69141 11.4409V9.19092H22.3164V11.4409H4.69141Z"
                  fill="black"
                />
              </svg>
              <HeadSubtitle>Mes tâches</HeadSubtitle>
            </div>
          </div>
          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {myTask.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-3 w-full">
                  <div
                    onClick={() =>
                      setMyTask((prevState) =>
                        prevState.map((e) =>
                          e.data === item.data
                            ? { ...item, isSelected: !item.isSelected }
                            : e
                        )
                      )
                    }
                  >
                    {item.isSelected ? (
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
                  <div className="bg-[#F0F0F0] w-full text-start rounded-lg p-2">
                    <Paragraph>Mettre à jour mon profil agence</Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:shadow-xl order-3 lg:order-4 h-[40vh] w-full bg-[#F6F6F6] lg:rounded-xl p-2 lg:p-4 flex flex-col gap-6 items-start">
          <div className="flex flex-col items-start w-full">
            <div className={"flex gap-2"}>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_626_106983"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="37"
                  height="37"
                >
                  <rect
                    x="0.191406"
                    y="0.190918"
                    width="36"
                    height="36"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_626_106983)">
                  <path
                    d="M22.6914 33.1909V30.1909H28.6914V15.1909H7.69141V21.1909H4.69141V9.19092C4.69141 8.36592 4.98516 7.65967 5.57266 7.07217C6.16016 6.48467 6.86641 6.19092 7.69141 6.19092H9.19141V3.19092H12.1914V6.19092H24.1914V3.19092H27.1914V6.19092H28.6914C29.5164 6.19092 30.2227 6.48467 30.8102 7.07217C31.3977 7.65967 31.6914 8.36592 31.6914 9.19092V30.1909C31.6914 31.0159 31.3977 31.7222 30.8102 32.3097C30.2227 32.8972 29.5164 33.1909 28.6914 33.1909H22.6914ZM12.1914 36.1909L10.0914 34.0909L13.9539 30.1909H1.69141V27.1909H13.9539L10.0914 23.2909L12.1914 21.1909L19.6914 28.6909L12.1914 36.1909ZM7.69141 12.1909H28.6914V9.19092H7.69141V12.1909Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              <div className="flex flex-col items-start">
                <HeadSubtitle>Mes rendez-vous</HeadSubtitle>
                <Paragraph>Rendez-vous à venir :</Paragraph>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {[...Array(5)].map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-3 w-full">
                  <div className="w-full flex items-center gap-2">
                    <Tiny className={"w-[10%] text-center"}>
                      <div>JEU.</div>
                      <div>8 JUIN</div>
                    </Tiny>
                    <div className="w-[90%] h-px bg-slate-400"></div>
                  </div>
                  <div className="flex flex-col gap-1 bg-[#F0F0F0] w-[90%] self-end text-start rounded-lg p-2">
                    <Tiny>12:00 - 13:00</Tiny>
                    <Tiny className={"!font-bold !text-[14px] !text-black"}>
                      Repas avec Jacques Ferrand
                    </Tiny>
                    <Tiny>Rue de la gare, Bordeaux</Tiny>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center w-full">
            <PrimaryButton
              data={{
                name: (
                  <div className="flex items-center justify-center">
                    Voir tous les rappels
                  </div>
                ),
                primary: true,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TodoList;
