import React from "react";
import {
  HeadSubtitle,
  HeadTitle,
  InputField,
  RadioButton,
  Tiny,
  Title,
} from "src/components";
import { Layout } from "src/layout";

const Statistics = () => {
  return (
    <Layout>
      <HeadTitle className={"text-start"}>Statistiques</HeadTitle>
      <div className="flex flex-col gap-4">
        <HeadSubtitle className={"text-start"}>
          Consulter les statistiques par période
        </HeadSubtitle>
        <div className="flex flex-wrap gap-5">
          <RadioButton disable={true} state={false} title={"Aujourd’hui"} />
          <RadioButton
            disable={true}
            state={false}
            title={"7 derniers jours"}
          />
          <RadioButton
            disable={true}
            state={false}
            title={"30 derniers jours"}
          />
          <div className="flex gap-1 items-center flex-wrap lg:flex-nowrap whitespace-nowrap font-bold">
            <RadioButton
              disable={true}
              state={false}
              title={"Annonces entre le "}
            />
            <div className="pl-4 lg:pl-0 w-full flex gap-2 lg:gap-1 font-medium ">
              <div className="relative">
                <InputField
                  type="date"
                  defaultValue={"2020-06-06"}
                  className={"!w-auto"}
                />
              </div>
              et le
              <div className="relative">
                <InputField
                  type="date"
                  defaultValue={"2020-06-06"}
                  className={"!w-auto"}
                />
              </div>
            </div>
          </div>
        </div>
        <HeadTitle className={"text-start"}>Votre agence</HeadTitle>
        <div
          className="flex flex-col xl:flex-row gap-5 justify-between bg-[#F0F0F0] 
      text-start rounded-lg p-5 w-full"
        >
          <div className="flex flex-col justify-end gap-2 xl:w-[25%]">
            <div className="flex items-center gap-4 w-full">
              <div className="border rounded-full border-primary  flex items-center justify-center h-[70px] w-[70px] ">
                <div className="bg-primary rounded-full h-[60px] flex items-center justify-center w-[60px] text-white text-md">
                  AOP
                </div>
              </div>
              <Title>Agence ORPI Paris</Title>
            </div>
            <div className="flex flex-col py-6 justify-center rounded-lg bg-primary text-center">
              <Title className={"!text-white !text-4xl"}>48</Title>
              <Tiny className={"!text-white !font-medium"}>
                ANNONCES ATTRIBUÉES
              </Tiny>
            </div>
          </div>
          <div className="xl:w-[70%] gap-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex p-4 justify-between bg-[#FFCBA5] text-start rounded-lg"
                >
                  <div className="flex flex-col ">
                    <HeadTitle className={"!text-black !text-4xl"}>
                      48
                    </HeadTitle>
                    <Tiny className={"!text-black !font-medium"}>
                      NON ABOUTI
                    </Tiny>
                  </div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_1982_7514"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="24"
                    >
                      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1982_7514)">
                      <mask id="path-2-inside-1_1982_7514" fill="white">
                        <path d="M12.3203 1.82031C14.5573 1.82031 16.7296 2.57034 18.4901 3.95049C20.2505 5.33063 21.4974 7.26119 22.0313 9.43349C22.5652 11.6058 22.3554 13.8944 21.4353 15.9334C20.5152 17.9723 18.9381 19.6439 16.956 20.6809C14.9739 21.7179 12.7014 22.0604 10.5017 21.6536C8.30207 21.2467 6.30234 20.1142 4.82224 18.4369C3.34215 16.7596 2.46717 14.6345 2.3372 12.4013C2.20724 10.1681 2.82979 7.95586 4.10532 6.11821L12.3203 11.8203L12.3203 1.82031Z" />
                      </mask>
                      <path
                        d="M12.3203 1.82031C14.5573 1.82031 16.7296 2.57034 18.4901 3.95049C20.2505 5.33063 21.4974 7.26119 22.0313 9.43349C22.5652 11.6058 22.3554 13.8944 21.4353 15.9334C20.5152 17.9723 18.9381 19.6439 16.956 20.6809C14.9739 21.7179 12.7014 22.0604 10.5017 21.6536C8.30207 21.2467 6.30234 20.1142 4.82224 18.4369C3.34215 16.7596 2.46717 14.6345 2.3372 12.4013C2.20724 10.1681 2.82979 7.95586 4.10532 6.11821L12.3203 11.8203L12.3203 1.82031Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linejoin="round"
                        mask="url(#path-2-inside-1_1982_7514)"
                      />
                    </g>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
        <HeadTitle className={"text-start"}>Vos collaborateurs</HeadTitle>
        <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(3)].map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-5 justify-between bg-[#F0F0F0] 
      text-start rounded-lg p-5"
              >
                <div className="flex gap-2 w-full">
                  <div className="flex items-center gap-2 lg:gap-4 w-full">
                    <div className="border rounded-full border-primary  flex items-center justify-center h-[70px] w-[70px] ">
                      <div className="bg-black rounded-full h-[60px] flex items-center justify-center w-[60px] text-white text-md">
                        PIC
                      </div>
                    </div>
                    <Title className={"line-clamp-2"}>Olivier Rouxd</Title>
                  </div>
                  <div className="flex flex-col py-2 w-[60%] justify-center rounded-lg bg-primary text-center">
                    <Title className={"!text-white !text-4xl"}>48</Title>
                    <Tiny className={"!text-white !font-medium"}>
                      ANNONCES ATTRIBUÉES
                    </Tiny>
                  </div>
                </div>
                <div className="w-full gap-4 grid grid-cols-2 ">
                  {[...Array(8)].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex p-2 justify-between items-center bg-[#FFCBA5] text-start rounded-lg"
                      >
                        <div className="flex gap-2 items-center">
                          <HeadTitle className={"!text-black !text-4xl"}>
                            48
                          </HeadTitle>
                          <Tiny className={"!text-black !font-medium"}>
                            NON ABOUTI
                          </Tiny>
                        </div>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1982_7514"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="25"
                            height="24"
                          >
                            <rect
                              x="0.5"
                              width="24"
                              height="24"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_1982_7514)">
                            <mask id="path-2-inside-1_1982_7514" fill="white">
                              <path d="M12.3203 1.82031C14.5573 1.82031 16.7296 2.57034 18.4901 3.95049C20.2505 5.33063 21.4974 7.26119 22.0313 9.43349C22.5652 11.6058 22.3554 13.8944 21.4353 15.9334C20.5152 17.9723 18.9381 19.6439 16.956 20.6809C14.9739 21.7179 12.7014 22.0604 10.5017 21.6536C8.30207 21.2467 6.30234 20.1142 4.82224 18.4369C3.34215 16.7596 2.46717 14.6345 2.3372 12.4013C2.20724 10.1681 2.82979 7.95586 4.10532 6.11821L12.3203 11.8203L12.3203 1.82031Z" />
                            </mask>
                            <path
                              d="M12.3203 1.82031C14.5573 1.82031 16.7296 2.57034 18.4901 3.95049C20.2505 5.33063 21.4974 7.26119 22.0313 9.43349C22.5652 11.6058 22.3554 13.8944 21.4353 15.9334C20.5152 17.9723 18.9381 19.6439 16.956 20.6809C14.9739 21.7179 12.7014 22.0604 10.5017 21.6536C8.30207 21.2467 6.30234 20.1142 4.82224 18.4369C3.34215 16.7596 2.46717 14.6345 2.3372 12.4013C2.20724 10.1681 2.82979 7.95586 4.10532 6.11821L12.3203 11.8203L12.3203 1.82031Z"
                              stroke="black"
                              stroke-width="3"
                              stroke-linejoin="round"
                              mask="url(#path-2-inside-1_1982_7514)"
                            />
                          </g>
                        </svg>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
