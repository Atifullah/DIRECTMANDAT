import React from "react";
import {
  CustomCalender,
  HeadSubtitle,
  HeadTitle,
  Paragraph,
  Tiny,
} from "src/components";
import { Layout } from "src/layout";

const MyAppointments = () => {
  return (
    <Layout>
      <HeadTitle className={"text-start"}>Liste des rendez-vous</HeadTitle>
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
              <HeadSubtitle>Mes rendez-vous</HeadSubtitle>
              <Paragraph>3 rendez-vous</Paragraph>
            </div>
          </div>

          <div className="overflow-y-scroll w-full flex flex-col gap-2">
            {[...Array(5)].map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-3 w-full">
                  <div className="w-full flex items-center gap-2">
                    <Tiny className={"w-[10%] text-start"}>12:00</Tiny>
                    <div className="w-[90%] h-px bg-slate-400"></div>
                  </div>
                  <div className="flex flex-col gap-1 bg-[#F0F0F0] w-[90%] self-end text-start rounded-lg p-2">
                    <Tiny>12:00 - 13:00</Tiny>
                    <Tiny className={"!font-bold !text-[14px] !text-black"}>
                      Visite appartement Jacques Ferrand
                    </Tiny>
                    <Tiny>
                      14 Avenue de Stinville, 94140 Alfortville, devant la porte
                      grise
                    </Tiny>
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

export default MyAppointments;
